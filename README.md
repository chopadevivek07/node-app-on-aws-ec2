# 🚀 Deploy Node.js Application on AWS EC2 Using PM2

## This project demonstrates how to deploy a simple Node.js web application on an AWS EC2 Ubuntu instance and keep it running using PM2 — a production process manager for Node.js.

## 🧩 Overview

You will:

- Launch an AWS EC2 instance (Ubuntu)

- Install Node.js and npm

- Deploy a simple Express.js app

- Use PM2 to keep it running continuously

## 🏗️ Simple Architecture Overview

![](/images/Architecture%20Diagram.png)

## ⚙️ Steps to Deploy

**1️⃣ Launch an EC2 Instance**

- Choose Ubuntu 22.04 LTS

- Type: t2.micro (Free Tier)

- Configure inbound rules:

- 22 (SSH) → for remote access

- 80 (HTTP) → for browser access

- 3000 (Custom TCP) → optional for Node app testing
![](/images/Screenshot%20(767).png)
![](/images/Screenshot%20(768).png)
![](/images/Screenshot%20(771).png)

**2️⃣ Connect to EC2**
```
ssh -i your-key.pem ubuntu@<EC2-public-IP>

```
![](/images/Screenshot%20(772).png)

**3️⃣ Install Node.js and npm**
```
sudo apt update -y
sudo apt install nodejs npm -y

##Check versions:

node -v
npm -v
```
![](/images/Screenshot%20(775).png)
![](/images/Screenshot%20(778).png)
![](/images/Screenshot%20(779).png)

**4️⃣ Create Your Node App**
```
mkdir node-app-on-aws-ec2 
cd node-app-on-aws-ec2

```
![](/images/Screenshot%20(782).png)

### app.js
```
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>🚀 Node.js App Running on AWS EC2 Instance!</h1>");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

```
### package.json
```
{
  "name": "node-app-on-aws-ec2",
  "version": "1.0.0",
  "description": "Simple Node.js app deployed on AWS EC2 using PM2",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}

```

**Install dependencies:**
```
npm install

```
![](/images/Screenshot%20(783).png)


**5️⃣ Run Your App**
```
node app.js

```
**Now visit:**

- http://<EC2-public-IP>:3000

- You should see your app running 🎉

![](/images/Screenshot%20(785).png)
![](/images/Screenshot%20(784).png)

## 6️⃣ Keep App Alive with PM2
**Install PM2 globally:**

```
sudo npm install -g pm2

Start the app with PM2:

pm2 start app.js --name node-app

Check status:

pm2 list

Save process:

pm2 save

Enable startup on reboot:

pm2 startup

Copy and run the command PM2 suggests (example):

sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u ubuntu --hp /home/ubuntu

Reboot and verify:

sudo reboot

After reconnecting:

pm2 list

```

![](/images/Screenshot%20(789).png)
![](/images/Screenshot%20(790).png)
![](/images/Screenshot%20(791).png)
![](/images/Screenshot%20(792).png)

## 🧠 PM2 Common Commands
| Command | Description |
|----------|--------------|
| pm2 start app.js | Start your app |
| pm2 list | View running apps |
| pm2 logs | View logs |
| pm2 stop node-app | Stop app |
| pm2 delete node-app | Remove app |
| pm2 save | Save running apps |
| pm2 resurrect | Restore apps after reboot |

## 🏁 Conclusion

This project shows how to quickly deploy and manage a Node.js app on AWS EC2 using PM2.
It’s a simple, reliable setup that keeps your app running continuously, even after restarts.
Perfect for small projects, personal demos, or learning AWS deployment basics before moving to Docker or serverless environments.

### 🧾 Author

**Vivek Chopade**  
📎 [GitHub](https://github.com/chopadevivek07)  
💼 [LinkedIn](https://linkedin.com/in/chopadevivek07)
