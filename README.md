# Personal Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, featuring dark mode, smooth animations, and a clean design.

## 🚀 Features

- **Dark Mode Toggle** - Seamless switching between light and dark themes with system preference detection
- **Smooth Scrolling** - Smooth navigation between sections with scroll spy highlighting
- **Animated Transitions** - Beautiful entrance animations using Framer Motion
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Sticky Navigation** - Fixed navbar with active section highlighting
- **Contact Form** - Interactive contact form with form validation
- **Social Links** - Connect through GitHub, LinkedIn, and email

## 📱 Sections

1. **Hero** - Introduction with name, title, and call-to-action buttons
2. **About** - Personal introduction with statistics and skills highlight
3. **Projects** - Showcase of featured projects with technologies used
4. **Skills** - Technical skills with progress bars and technology tags
5. **Contact** - Contact form and social media links
6. **Footer** - Additional links and contact information

## 🛠️ Tech Stack

- **Frontend**: React 19, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with dark mode support

## 🎨 Design Features

- **Gradient Backgrounds** - Modern gradient designs throughout
- **Hover Effects** - Interactive elements with smooth transitions
- **Glass Morphism** - Backdrop blur effects on navigation
- **Progress Bars** - Animated skill level indicators
- **Card Layouts** - Clean project and skill cards
- **Typography** - Beautiful text gradients and hierarchy

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📝 Customization

### Personal Information
- Update name and title in `src/components/Hero.jsx`
- Modify about section in `src/components/About.jsx`
- Change contact information in `src/components/Contact.jsx`

### Projects
- Add your projects in `src/components/Projects.jsx`
- Include project descriptions, technologies, and links
- Upload project images to `public/` folder

### Skills
- Update skill categories and levels in `src/components/Skills.jsx`
- Modify technology tags to match your expertise

### Social Links
- Update social media URLs in components
- Add or remove social platforms as needed

### Colors and Themes
- Modify color scheme in `tailwind.config.js`
- Adjust gradients in component files
- Customize dark mode colors

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation with scroll spy
│   ├── Hero.jsx        # Landing section
│   ├── About.jsx       # About section
│   ├── Projects.jsx    # Projects showcase
│   ├── Skills.jsx      # Skills and technologies
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer section
├── contexts/           # React contexts
│   └── ThemeContext.jsx # Dark mode context
├── hooks/              # Custom hooks
│   └── useScrollSpy.js # Scroll spy functionality
├── App.jsx            # Main app component
└── main.jsx           # App entry point
```

## 🎯 Performance Features

- **Lazy Loading** - Images and components load on demand
- **Code Splitting** - Optimized bundle sizes
- **Smooth Animations** - 60fps animations with Framer Motion
- **Responsive Images** - Optimized for different screen sizes
- **Fast Loading** - Vite for lightning-fast development

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

- Automatic detection of system preferences
- Manual toggle with smooth transitions
- Persistent theme selection in localStorage
- Consistent styling across all components

## 📞 Contact Form Features

- **Form Validation** - Client-side validation for all fields
- **Loading States** - Visual feedback during submission
- **Responsive Design** - Works perfectly on all devices
- **Accessibility** - Proper labels and ARIA attributes

## 🎨 Animation Features

- **Entrance Animations** - Sections animate in as you scroll
- **Hover Effects** - Interactive elements respond to user interaction
- **Stagger Animations** - Elements animate in sequence
- **Smooth Transitions** - Consistent 300ms transitions

## 🔧 Build and Deployment

The project uses Vite for fast builds and can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ by [Your Name]+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
