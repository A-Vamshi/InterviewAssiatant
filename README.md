# 🎯 InterviewAssistant

A powerful application to help users prepare for mock interviews using **Vapi Workflow**, **Next.js**, and **Firebase**. Practice interviews with voice-based AI, receive real-time feedback, and improve your performance.

---

## 🚀 Features

- 🎙️ **Voice-Based Interviews**: Talk to an AI interviewer using Vapi workflows.
- 🤖 **AI-Generated Questions**: Get intelligent, role-specific questions dynamically.
- 📊 **Real-Time Feedback**: Receive instant evaluation and suggestions.
- 🔒 **Firebase Integration**: Secure user management and data storage.
- ⚡ **Built with Next.js**: Fast, modern, and SEO-optimized frontend.

---

## 🛠️ Tech Stack

- **[Next.js](https://nextjs.org/)** – React-based web framework
- **[Vapi.ai](https://vapi.ai/)** – Voice AI interaction engine
- **[Firebase](https://firebase.google.com/)** – Backend services and authentication
- **[Google Generative AI](https://makersuite.google.com/)** – AI question generation
- **[TailwindCSS](https://tailwindcss.com/)** (if used) – Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** (if used) – Type-safe development

---

## 📷 Demo
<img src="/images/1.png" alt="screenshot" width="1000"/> <img src="/images/2.png" alt="screenshot" width="1000"/>
<img src="/images/3.png" alt="screenshot" width="1000"/>
<img src="/images/4.png" alt="screenshot" width="1000"/>
<img src="/images/5.png" alt="screenshot" width="1000"/>

---

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/A-Vamshi/InterviewAssiatant.git   
cd interviewassistant

# 2. Install dependencies
npm install

# 3. Create environment file
touch .env.local
```

## Add the following to .env.local: 

```bash
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_PRIVATE_KEY_ID=your_firebase_private_key_id
FIREBASE_PRIVATE_KEY="your_firebase_private_key"
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
GOOGLE_GENERATIVE_AI_API_KEY=your_generative_ai_api_key
NEXT_PUBLIC_VAPI_TOKEN=your_vapi_token
NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_vapi_workflow_id
```

## Run it in your machine 
```bash
# 4. Run the development server
npm run dev
# or
yarn dev
```

## License
- MIT
