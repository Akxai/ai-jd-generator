# ✨ AI Job Description Generator

A modern, beautifully animated AI-powered job description generator built with React, Framer Motion, and Hugging Face AI.

![Version](https://img.shields.io/badge/version-2.0.0-blue)
![React](https://img.shields.io/badge/React-19.2.0-61dafb)
![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 Features

### 🎨 Modern Design
- **Glassmorphism UI** - Beautiful frosted glass effects with backdrop blur
- **Gradient Background** - Stunning purple-pink gradient with animated orbs
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Dark Theme** - Eye-friendly dark mode design

### ✨ Animations
- **Framer Motion** - Smooth, professional animations throughout
- **Micro-interactions** - Hover effects, tap feedback, and scale animations
- **Page Transitions** - Elegant fade and slide animations
- **Loading States** - Animated sparkles and pulsing dots while generating
- **Animated Orbs** - Floating background orbs for depth

### 🎯 User Experience
- **Toast Notifications** - Beautiful success/error notifications with react-hot-toast
- **Copy to Clipboard** - One-click copy with visual feedback
- **Download as Text** - Export job descriptions as `.txt` files
- **Reset Function** - Quick reset to start fresh
- **Form Validation** - Smart validation with helpful error messages
- **Icons** - Beautiful Lucide React icons for better clarity

### 🤖 AI-Powered
- **Hugging Face AI** - Powered by Llama 3.2 1B Instruct model
- **Smart Prompting** - Structured prompts for consistent, high-quality outputs
- **500 Token Output** - Comprehensive job descriptions with interview questions
- **Fast Generation** - Quick response times

## 📦 Tech Stack

- **React 19.2.0** - Latest React with modern hooks
- **Vite 7.2.4** - Lightning-fast build tool
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **Lucide React** - Beautiful, consistent icon set
- **React Hot Toast** - Elegant toast notifications
- **Hugging Face Inference** - AI model integration

## 🛠️ Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd ai-jd-generator

# Install dependencies
npm install

# Create .env file
echo "VITE_HUGGINGFACE_API_KEY=your_api_key_here" > .env

# Start development server
npm run dev
```

## 🔑 Getting Hugging Face API Key

1. Go to [Hugging Face](https://huggingface.co/)
2. Sign up or log in
3. Go to Settings → Access Tokens
4. Create a new token
5. Copy and paste into `.env` file

## 🎯 Usage

1. **Enter Job Details**
   - Job Role (required)
   - Experience Level (optional)
   - Required Skills (optional)
   - Company Type (optional)

2. **Generate**
   - Click "Generate JD" button
   - Wait for AI to create the description
   - See beautiful loading animation

3. **Actions**
   - **Copy** - Copy to clipboard
   - **Download** - Save as text file
   - **Reset** - Clear and start over

## 🎨 Design Features

### Color Palette
- **Primary Gradient**: Indigo → Purple → Pink
- **Accent**: Yellow-Pink gradient
- **Glass Effect**: White with 10-20% opacity
- **Text**: White with various opacity levels

### Typography
- **Headings**: Bold, extra-large, gradient text
- **Body**: Clean, readable sans-serif
- **Code**: Monospace for generated content

### Spacing
- Generous padding and margins
- Consistent 4/6/8/10 unit spacing
- Responsive gaps for different screen sizes

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (optimized card size)
- **Desktop**: > 1024px (full width, max 4xl)

## 🚀 Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Change Colors
Edit the gradient in `App.jsx`:
```jsx
className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
```

### Change Model
Update the model in the `handleGenerate` function:
```javascript
model: "meta-llama/Llama-3.2-1B-Instruct"
```

### Adjust Animations
Modify Framer Motion props:
```jsx
transition={{ duration: 0.6, delay: 0.2 }}
```

## 🐛 Troubleshooting

**Issue**: Module not found errors
- **Solution**: Run `npm install` again

**Issue**: API errors
- **Solution**: Check your Hugging Face API key in `.env`

**Issue**: Build errors
- **Solution**: Clear cache with `rm -rf node_modules package-lock.json && npm install`

## 📄 License

MIT License - feel free to use this project however you'd like!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

## 📧 Contact

Have questions? Feel free to reach out!

---

**Made with ❤️ and AI**
