# Twicord

Twicord is a website/application that provides users with group or personal chats, file sharing (video or audio), customized server creation with channel creation options, video calls, direct messages, roles and permissions, and much more.

## Features

- **Channel Creation:** Create channels within servers for organized communication.
- **Messaging:** Send and receive messages within channels or direct messages.
- **Direct Messages and Group Messages:** Communicate with other users privately or within group chats.
- **Server Creation:** Create customized servers (groups) for specific communities or interests.
- **Roles and Permissions:** Define roles and permissions for users within servers to manage access and moderation.
- **File Sharing (Video/Audio):** Share videos and audio files with other users.
- **Customization:** Customize servers and user profiles to personalize the experience.

## High-Level Relation Schema
![image](https://github.com/Riki321/discord-clone/assets/79001372/de6c0cf7-a66c-4a63-982a-91cbd8a8d969)

### 1. Profile
- Represents a user profile.
- One-to-many relationship with Server, Member, and Channel models.

### 2. Server
- Represents a server (or group).
- Many-to-one relationship with the Profile model.
- One-to-many relationship with Member and Channel models.

### 3. Member
- Represents a member of a server.
- Many-to-one relationship with the Profile and Server models.
- One-to-many relationships with Message, DirectMessage, Conversation (initiated and received).

### 4. Channel
- Represents a channel within a server.
- Many-to-one relationship with the Profile and Server models.
- One-to-many relationship with the Message model.

### 5. Message
- Represents a message sent within a channel.
- Many-to-one relationship with the Member and Channel models.

### 6. Conversation
- Represents a conversation between two members.
- Two many-to-one relationships with the Member model.
- One-to-many relationship with the DirectMessage model.

### 7. DirectMessage
- Represents a direct message sent between two members.
- Many-to-one relationship with the Member and Conversation models.





This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


