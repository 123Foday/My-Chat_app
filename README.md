
# 💬 My Chat App

A real-time chat web application built with **Node.js, Express, Socket.IO, and MongoDB**.  
This project allows users to create accounts, log in securely, and send instant messages in real time.  

---

## 🚀 Features
- 🔐 **User Authentication** (Register/Login with hashed passwords)
- 💬 **Real-time Messaging** using Socket.IO
- 👥 **Chat Rooms / Private Chats**
- 🗄️ **MongoDB Integration** for storing users and chat history
- 🎨 **Responsive Frontend** for smooth user experience
- ⚡ **REST API** endpoints for authentication and data handling

---

## 🛠️ Tech Stack

### Backend
- **Node.js** – JavaScript runtime environment
- **Express.js** – Web framework for routing and middleware
- **Socket.IO** – Real-time communication between client and server
- **MongoDB + Mongoose** – NoSQL database for persistence
- **bcrypt** – Secure password hashing
- **jsonwebtoken (JWT)** – Token-based authentication

### Frontend
- **HTML, CSS, JavaScript** (or React if included in client folder)
- **Socket.IO Client** – Connects frontend to backend in real time

---

## 📂 Project Structure

My-Chat_app/ │── client/        # Frontend files │── server/        # Backend (Express + Socket.IO + MongoDB) │── .gitignore     # Ignored files │── My-chapApp Appendix.txt # Notes/documentation

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/123Foday/My-Chat_app.git
   cd My-Chat_app

2. Install dependencies

cd server
npm install
cd ../client
npm install   # if client has a package.json


3. Set up environment variables Create a .env file in the server/ folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


4. Run the server

cd server
npm start


5. Run the client

cd client
npm start


6. Open the app in your browser:

http://localhost:3000




---

📖 Appendix

The My-chapApp Appendix.txt file includes extra notes and project documentation.


---

🤝 Contributing

Feel free to fork this repo, open issues, and submit pull requests.


---

📜 License

This project is licensed under the MIT License.
