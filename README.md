# Real Estate Client Intake & Scheduling Automation

A full-stack automation system for real estate brokerages to capture lead form submissions, send follow-up messages, and track engagement status via a real-time dashboard.

## 🚀 Features

- **Lead Capture Form**: Collect lead information including name, email, phone, and property details
- **Automated Follow-ups**: Automatic email and SMS notifications for new leads
- **Real-time Dashboard**: Track lead status and engagement in real-time
- **Modern UI**: Built with shadcn/ui and Tailwind CSS for a polished user experience
- **Secure & Scalable**: Built on Next.js with Supabase for reliable data storage

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **UI**: shadcn/ui + Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Automation**: n8n (Cloud or self-hosted)
- **Messaging**:
  - Email: Resend (100 free emails/month)
  - SMS: Twilio (free trial $15)
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- n8n instance (cloud or self-hosted)
- Resend API key (for email)
- Twilio account (for SMS)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/real-estate-automation.git
   cd real-estate-automation
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   NEXT_PUBLIC_N8N_URL=your_n8n_webhook_url
   NEXT_PUBLIC_APP_SECRET=your_app_secret
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📊 Project Structure

- `/src/app` - Next.js 13+ app directory
  - `/leads` - Lead capture form and related components
  - `/admin` - Admin dashboard for lead management
- `/src/components` - Reusable UI components
- `/src/lib` - Utility functions and API clients
- `/public` - Static assets

## 📈 Deployment

### Vercel

1. Push your code to a GitHub/GitLab/Bitbucket repository
2. Import your project on Vercel
3. Add your environment variables in the Vercel project settings
4. Deploy!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- [Supabase](https://supabase.com/) - Open Source Firebase Alternative
- [n8n](https://n8n.io/) - Workflow Automation Tool
