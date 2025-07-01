'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type LeadStatus = 'new' | 'contacted' | 'viewing' | 'converted' | 'lost';

interface Lead {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  property_address: string;
  current_status: string;
  status_email: string;
  status_sms: string;
  status?: LeadStatus;
}

// Status badge component
const StatusBadge = ({ status = 'new' }: { status?: string }) => {
  const statusColors: Record<string, string> = {
    new: 'bg-blue-100 text-blue-800',
    contacted: 'bg-yellow-100 text-yellow-800',
    viewing: 'bg-purple-100 text-purple-800',
    converted: 'bg-green-100 text-green-800',
    lost: 'bg-red-100 text-red-800',
  };
  
  const displayStatus = status?.toLowerCase() || 'new';
  const statusText = displayStatus.charAt(0).toUpperCase() + displayStatus.slice(1);

  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[displayStatus]}`}>
      {statusText}
    </span>
  );
};

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLeads = async () => {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setLeads(data || []);
    } catch (err) {
      console.error('Error fetching leads:', err);
      setError('Failed to load leads. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchLeads();

    // Set up polling every 10 seconds
    const intervalId = setInterval(fetchLeads, 10000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Leads Dashboard</h1>
        <button 
          onClick={fetchLeads}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          disabled={isLoading}
        >
          {isLoading ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="font-semibold">Name</TableHead>
                <TableHead className="font-semibold">Email</TableHead>
                <TableHead className="font-semibold">Phone</TableHead>
                <TableHead className="font-semibold">Property</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold">Submitted</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8">
                    <div className="flex justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    </div>
                  </TableCell>
                </TableRow>
              ) : leads.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                    No leads found. Start by submitting a new lead through the form.
                  </TableCell>
                </TableRow>
              ) : (
                leads.map((lead) => {
                  // Use current_status or default to 'new' if not set
                  const status = lead.current_status ? lead.current_status.replace(/"/g, '').toLowerCase() : 'new';
                  return (
                    <TableRow key={lead.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{lead.name?.trim()}</TableCell>
                      <TableCell className="text-gray-600">{lead.email?.trim()}</TableCell>
                      <TableCell className="text-gray-600">{lead.phone?.trim()}</TableCell>
                      <TableCell className="text-gray-600">{lead.property_address?.trim()}</TableCell>
                      <TableCell>
                        <StatusBadge status={status} />
                      </TableCell>
                      <TableCell className="text-sm text-gray-500">
                        {new Date(lead.created_at).toLocaleString()}
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
