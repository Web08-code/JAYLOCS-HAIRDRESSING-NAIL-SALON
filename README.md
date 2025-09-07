# JAYLOCS HAIRDRESSING & NAIL SALON

A modern, responsive web application for JAYLOCS Hairdressing & Nail Salon, serving Meru University students and the local community in Meru, Kenya.

## 🌟 Features

### Services Offered
- **Hair Dressing**: Braids, knotless braids, weaving, wash & blow dry, twist outs
- **Nail Care**: Manicures, pedicures, gel polish, nail art, eyebrow tattoos
- **Dreadlocks**: Installation, maintenance, styling, consultation services
- **Fashion**: Trendy trench coats perfect for Meru's weather

### Key Functionality
- **User Authentication**: Secure login/signup with Supabase
- **Online Booking**: Schedule appointments with calendar integration
- **Shopping Cart**: Add services and products for easy checkout
- **Payment Integration**: Multiple payment options (M-Pesa, Cash, PayPal, etc.)
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Location Services**: Interactive map and service area coverage

## 🚀 Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Backend**: Supabase (Authentication, Database)
- **Build Tool**: Vite
- **Deployment**: Ready for Netlify/Vercel

## 📱 Pages & Components

### Main Pages
- **Home**: Hero section, services overview, testimonials
- **Services**: Hair dressing, nail care, dreadlocks, trench coats
- **Booking**: Calendar-based appointment scheduling
- **Cart**: Shopping cart with payment options
- **About**: Company story, team, values
- **Contact**: Contact form, location, FAQ

### Key Components
- **Layout**: Navigation, header, footer
- **AuthContext**: User authentication management
- **CartContext**: Shopping cart state management
- **ProtectedRoute**: Route protection for authenticated users

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Supabase account

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jaylocs-salon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Create a Supabase project at [supabase.com](https://supabase.com)
   - Update `src/lib/supabase.ts` with your Supabase credentials
   - Run the migration in `supabase/migrations/` to set up the demo user

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🔐 Authentication

### Demo Account
For testing purposes, use these credentials:
- **Email**: demo@jaylocs.com
- **Password**: demo123

### User Registration
New users can sign up with email and password. Email confirmation is disabled for easier testing.

## 💳 Payment Methods

The application supports multiple payment options popular in Kenya:
- **M-Pesa**: Mobile money payments
- **Cash**: Cash on delivery/at salon
- **PayPal**: International payments
- **Payless**: Kenya-specific payment service
- **KCB Paybill**: Bank payment system

## 📍 Service Areas

JAYLOCS serves the following areas in Meru County:
- Nchiru (Main Location)
- Meru Town
- Maua
- Meru University Campus
- Katheri
- Surrounding areas

## 🕒 Business Hours

- **Thursday - Sunday**: 8:30 AM - 7:00 PM
- **Monday - Wednesday**: CLOSED

## 📋 Important Notes

### For Clients
- Come with washed and blow-dried hair
- Bring your own braids and hair products
- Arrive 10 minutes before appointment
- Student discounts available with valid ID

### For Developers
- All routes except login/signup are protected
- Cart state persists during session
- Responsive design follows mobile-first approach
- Icons are from Lucide React library

## 🚀 Deployment

### Netlify Deployment
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables for Supabase

### Vercel Deployment
1. Import project to Vercel
2. Framework preset: Vite
3. Add environment variables
4. Deploy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact Information

- **Location**: Nchiru, Meru County, Kenya
- **Target Audience**: Meru University students and local community
- **Services**: Professional beauty and fashion services

## 📄 License

This project is proprietary software for JAYLOCS Hairdressing & Nail Salon.

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📊 Project Structure

```
src/
├── components/          # Reusable components
├── contexts/           # React contexts (Auth, Cart)
├── pages/              # Page components
├── lib/                # Utilities (Supabase config)
├── App.tsx             # Main app component
└── main.tsx           # Entry point

public/                 # Static assets
supabase/
└── migrations/         # Database migrations
```

---

**Built with ❤️ for the Meru University community**