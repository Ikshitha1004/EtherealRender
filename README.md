# EtherealRender

## Overview

**Vite AI Image Generator** is a modern web application built with Vite, Tailwind CSS.It geneates images based on user prompts and it makes use of gpt-3.5 turbo with OpenAI API. Images thus generated are hosted by Cloudinary.User details are managed with MongoDB.

## Features

- **Fast Development**: Powered by Vite for instant hot module replacement and fast build times.
- **Styling**: Uses Tailwind CSS for a modern and responsive design.
- **Image Generation**: Integrates with the OpenAI API to generate images from text prompts.
- **Cloud Storage**: Stores generated images using Cloudinary.
- **Data Management**: Utilizes MongoDB for storing and managing user data.

## Getting Started

Follow these steps to set up and run the Vite AI Image Generator:

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)
- OpenAI API key
- Cloudinary account and API key

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/vite-ai-image-generator.git
   cd vite-ai-image-generator
   ```
2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```
3.**Set Up Environment Variables**
Create a .env file in the root directory and add the following environment variables:
   ```bash
   OPENAI_API_KEY=your_openai_api_key_here
   VITE_CLOUDINARY_URL=your_cloudinary_url_here
   MONGODB_URI=your_mongodb_uri_here
   ```
4.**Run the Development Server**
Start the development server with:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
5.**Open in Browser**
Navigate to http://localhost:3000 (or the port specified in the terminal) to view the application.

