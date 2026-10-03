const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
        <html>
        <head>
            <title>Azure PaaS Demo</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin-top: 100px;
                }
                .box {
                    padding: 30px;
                    margin: auto;
                    width: 500px;
                    border: 1px solid #ccc;
                    border-radius: 10px;
                }
            </style>
        </head>
        <body>
            <div class="box">
                <h1>Azure PaaS Auto Scaling Demo</h1>
                <p>Node.js application running on Azure App Service.</p>
                <p>Instance: ${process.env.WEBSITE_INSTANCE_ID || "Local"}</p>
                <p>Server Time: ${new Date().toISOString()}</p>
            </div>
        </body>
        </html>
    `);
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/info", (req, res) => {
  res.json({
    application: "Azure PaaS Auto Scaling Demo",
    platform: "Microsoft Azure App Service",
    runtime: "Node.js",
    instance: process.env.WEBSITE_INSTANCE_ID || "Local",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
