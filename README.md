
# EtherealRender

## Overview

**EtherealRender** is a modern web application built with Vite and Tailwind CSS. It generates images based on user prompts using the GPT-3.5 Turbo model via the OpenAI API. The generated images are hosted on Cloudinary, while user details are managed with MongoDB.

## Features

- **Fast Development**: Powered by Vite for instant hot module replacement and rapid build times.
- **Styling**: Utilizes Tailwind CSS for a sleek, modern, and responsive design.
- **Image Generation**: Leverages the OpenAI API to generate images from text prompts.
- **Cloud Storage**: Stores and serves generated images via Cloudinary.
- **Data Management**: Manages user data with MongoDB.

## Getting Started

To set up and run EtherealRender, follow these steps:

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)
- OpenAI API key
- Cloudinary account and API key

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/ethereal-render.git
   cd ethereal-render
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add the following environment variables:
   ```bash
   OPENAI_API_KEY=your_openai_api_key_here
   VITE_CLOUDINARY_URL=your_cloudinary_url_here
   MONGODB_URI=your_mongodb_uri_here
   ```

4. **Run the Development Server**
   Start the development server with:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in Browser**
   Navigate to `http://localhost:5173` (or the port specified in the terminal) to view the application.
```
