# Next Auth Login

A modern, full-featured authentication system built with **Next.js 15** and **NextAuth.js**. This project demonstrates a complete authentication implementation with role-based access control (RBAC), user management, and session handling.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Authentication](#authentication)
- [Available Routes](#available-routes)
- [Usage Examples](#usage-examples)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **NextAuth.js Integration**: Secure authentication with credentials provider
- **Role-Based Access Control**: Admin and user role differentiation
- **Session Management**: Real-time session watching and management
- **Protected Routes**: Middleware-based route protection
- **User Profiles**: User information display and management
- **Toast Notifications**: Real-time user feedback with react-hot-toast
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Modern UI Components**: Built with Lucide React icons
- **API Integration**: Ready for backend API connectivity
- **Performance Optimized**: Vercel Speed Insights integration

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.3.2](https://nextjs.org)
- **Authentication**: [NextAuth.js 4.24.11](https://next-auth.js.org)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **UI Components**: [Lucide React 0.511.0](https://lucide.dev)
- **HTTP Client**: [Axios 1.9.0](https://axios-http.com)
- **Notifications**: [React Hot Toast 2.5.2](https://react-hot-toast.com)
- **Cookies**: [js-cookie 3.0.5](https://github.com/js-cookie/js-cookie)
- **Monitoring**: [Vercel Speed Insights](https://vercel.com/analytics/speed-insights)

## 📦 Prerequisites

Before you begin, ensure you have:

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** package manager
- A code editor (VS Code recommended)

## 🚀 Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd next_auth_login
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
BASE_API_URL=http://your-api-url.com
```

> **Note**: Generate a secure secret using:
> ```bash
> openssl rand -base64 32
> ```

## 🎯 Getting Started

### Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The application will automatically reload as you make changes.

### Production Build

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 📂 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.js          # NextAuth configuration
│   ├── components/
│   │   ├── Navbar.jsx                # Navigation component
│   │   └── SessionWatcher.jsx        # Session monitoring
│   ├── layout.js                     # Root layout
│   ├── page.js                       # Home page
│   ├── Providers.jsx                 # Auth & Toast providers
│   ├── globals.css                   # Global styles
│   ├── about/                        # About page
│   ├── admin/                        # Admin dashboard
│   ├── contact/                      # Contact page
│   ├── product/                      # Product page
│   ├── signin/                       # Sign in page
│   ├── success/                      # Success page
│   ├── unauthorized/                 # Unauthorized access page
│   └── user/                         # User profile page
├── package.json                      # Dependencies
├── next.config.mjs                   # Next.js config
├── tailwind.config.js                # Tailwind CSS config
├── postcss.config.mjs                # PostCSS config
└── eslint.config.mjs                 # ESLint config
```

## 🔐 Configuration

### NextAuth Setup

The authentication is configured in [src/app/api/auth/[...nextauth]/route.js](src/app/api/auth/[...nextauth]/route.js):

- **Provider**: Credentials-based authentication
- **Admin Account**: 
  - Email: `admin@example.com`
  - Password: `admin123`
  - Role: `admin`
- **User Account**:
  - Email: `user@gmail.com`
  - Password: `user123`
  - Role: `user`

### Session Provider

All authentication features are wrapped with `SessionProvider` in [src/app/Providers.jsx](src/app/Providers.jsx), enabling session access throughout the app.

## 🔑 Authentication

### Login

Navigate to `/signin` and log in with one of the test accounts:

- **Admin**: admin@example.com / admin123
- **User**: user@gmail.com / user123

### Session Access

Access the current session in any client component:

```jsx
import { useSession } from "next-auth/react";

export default function YourComponent() {
  const { data: session, status } = useSession();
  
  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") return <p>Access Denied</p>;
  
  return <p>Welcome, {session.user.firstName}!</p>;
}
```

### Sign Out

Use the sign-out function from NextAuth:

```jsx
import { signOut } from "next-auth/react";

<button onClick={() => signOut()}>Sign Out</button>
```

## 🗺️ Available Routes

| Route | Purpose | Auth Required |
|-------|---------|--------------|
| `/` | Home page | No |
| `/signin` | Login page | No |
| `/user` | User profile | Yes |
| `/admin` | Admin dashboard | Yes (Admin) |
| `/about` | About page | No |
| `/contact` | Contact page | No |
| `/product` | Product page | No |
| `/success` | Success message | No |
| `/unauthorized` | Unauthorized access | No |

## 💡 Usage Examples

### Access User Information

```jsx
const { data: session } = useSession();

console.log(session.user.email);
console.log(session.user.role);
console.log(session.user.firstName);
console.log(session.user.profilePic);
```

### Show Toast Notifications

```jsx
import toast from "react-hot-toast";

toast.success("Login successful!");
toast.error("An error occurred!");
toast.loading("Processing...");
```

### Make API Requests

```jsx
import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/endpoint`);
    console.log(response.data);
  } catch (error) {
    console.error("Request failed:", error);
  }
};
```

## 📜 Scripts

| Command | Description |
|---------|------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 🚧 Next Steps

To extend this project:

1. **Connect Real Backend**: Replace hardcoded credentials with API calls
2. **Database Integration**: Add a database (PostgreSQL, MongoDB, etc.)
3. **OAuth Providers**: Add Google, GitHub, or other OAuth providers
4. **Email Verification**: Implement email confirmation for sign-ups
5. **Password Reset**: Add forgot password functionality
6. **Two-Factor Authentication**: Enhance security with 2FA
7. **User Registration**: Add sign-up page and functionality

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

---

