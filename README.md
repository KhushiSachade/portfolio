# Khushi Sachade - Portfolio Website

A modern, professional portfolio website showcasing Khushi Sachade's expertise as a Software Developer, Product Manager, and AI Enthusiast.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Modern UI/UX**: Clean, elegant design with smooth animations
- **Contact Form**: Backend integration with email notifications and Excel export
- **Professional Sections**: Home, About, Experience, Projects, and Contact pages
- **SEO Optimized**: Meta tags and structured content
- **Performance**: Optimized images and smooth scrolling

## 🚀 Tech Stack

### Frontend
- React 18
- React Router DOM
- Bootstrap 5
- React Bootstrap
- React Icons
- AOS (Animate On Scroll)

### Backend
- Node.js
- Express.js
- Nodemailer (Email functionality)
- XLSX (Excel export)
- CORS support

## 📁 Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/               # Source code
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   └── package.json       # Frontend dependencies
├── server.js              # Node.js backend
├── package.json           # Backend dependencies
├── env.example            # Environment variables template
└── README.md              # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Gmail account (for email functionality)

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd portfolio
```

### Step 2: Install Dependencies
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

### Step 3: Environment Configuration
1. Copy the environment template:
```bash
cp env.example .env
```

2. Edit `.env` file with your email credentials:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

**Note**: For Gmail, you'll need to:
- Enable 2-factor authentication
- Generate an App Password
- Use the App Password instead of your regular password

### Step 4: Run the Application

#### Development Mode (Both Frontend & Backend)
```bash
npm run dev
```

#### Production Mode
```bash
# Build the frontend
npm run build

# Start the production server
npm start
```

#### Individual Commands
```bash
# Backend only
npm run server

# Frontend only
npm run client
```

## 🌐 Access the Application

- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

## 📧 Contact Form Configuration

The contact form automatically:
- Sends emails to your configured email address
- Exports submissions to an Excel file (`contact_submissions.xlsx`)
- Provides user feedback on submission status

## 🎨 Customization

### Colors & Theme
Edit `client/src/index.css` to modify:
- Primary colors
- Gradients
- Shadows
- Typography

### Content
Update the following files to customize content:
- `client/src/pages/Home.js` - Hero section and highlights
- `client/src/pages/About.js` - Personal information
- `client/src/pages/Experience.js` - Work history and education
- `client/src/pages/Projects.js` - Project showcase and skills
- `client/src/pages/Contact.js` - Contact information

### Styling
- Modify Bootstrap classes in components
- Add custom CSS in `client/src/index.css`
- Update component-specific styles

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Frontend Deployment
```bash
cd client
npm run build
```
Upload the `build` folder to your hosting provider.

### Backend Deployment
```bash
npm start
```
Deploy to platforms like:
- Heroku
- Vercel
- DigitalOcean
- AWS

## 🔧 Troubleshooting

### Common Issues

1. **Email not sending**
   - Verify Gmail credentials in `.env`
   - Check if 2FA is enabled and App Password is generated
   - Ensure firewall isn't blocking SMTP

2. **Port conflicts**
   - Change PORT in `.env` file
   - Kill processes using the default port

3. **Build errors**
   - Clear node_modules and reinstall
   - Check Node.js version compatibility

### Performance Optimization
- Images are optimized for web
- CSS and JS are minified in production
- Lazy loading implemented for better performance

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Support

For support or questions:
- Email: ksachade203@gmail.com
- LinkedIn: [Khushi Sachade](https://linkedin.com/in/khushi-sachade)
- GitHub: [KhushiSachade](https://github.com/KhushiSachade)

---

**Built with ❤️ by Khushi Sachade**
