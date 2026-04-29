import express from 'express';
import { createServer as createViteServer } from 'vite';
import * as path from 'path';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for JSON parsing
  app.use(express.json());

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', domain: 'Aether-Domain Anchored' });
  });

  // Squarespace Data Sync Endpoint
  app.post('/api/squarespace/sync', async (req, res) => {
    const apiKey = process.env.SQUARESPACE_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ 
        success: false, 
        message: 'System Error: SQUARESPACE_API_KEY not found in core environment. Data Sync Failed.' 
      });
    }

    try {
      // Attempting to ping the Squarespace Commerce Inventory API to verify connection
      const response = await fetch('https://api.squarespace.com/1.0/commerce/inventory', {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'User-Agent': 'Aetherium-Nexus-Node/1.0'
        }
      });

      if (!response.ok) {
        const errorData = await response.text();
        return res.status(response.status).json({
          success: false,
          message: `Squarespace API Warning: [${response.status} ${response.statusText}] ${errorData}`
        });
      }

      const data = await response.json();
      
      return res.json({
        success: true,
        message: 'Squarespace API Synchronized successfully. Data stream active.',
        itemCount: data.inventory?.length || 0,
        data: data
      });
      
    } catch (error) {
      console.error('Squarespace Integration Error:', error);
      return res.status(500).json({
        success: false,
        message: `Network Fault in Aether-Domain linkage: ${error instanceof Error ? error.message : 'Unknown routing error'}`
      });
    }
  });

  // Squarespace Products Endpoint
  app.get('/api/squarespace/products', async (req, res) => {
    const apiKey = process.env.SQUARESPACE_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ 
        success: false, 
        message: 'System Error: SQUARESPACE_API_KEY not found.' 
      });
    }

    try {
      // Pinging the Squarespace Commerce Products API
      const response = await fetch('https://api.squarespace.com/1.0/commerce/products', {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'User-Agent': 'Aetherium-Nexus-Node/1.0'
        }
      });

      if (!response.ok) {
        const errorData = await response.text();
        return res.status(response.status).json({
          success: false,
          message: `Squarespace API Warning: [${response.status} ${response.statusText}] ${errorData}`
        });
      }

      const data = await response.json();
      
      return res.json({
        success: true,
        products: data.products || []
      });
      
    } catch (error) {
      console.error('Squarespace Products Error:', error);
      return res.status(500).json({
        success: false,
        message: `Network Fault: ${error instanceof Error ? error.message : 'Unknown routing error'}`
      });
    }
  });

  // Vite Integration (for development and production static serving)
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Aether-Domain] API Protocol listening on port ${PORT}`);
  });
}

startServer();
