import { spawn } from 'child_process';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the backend .env file
const envPath = resolve(__dirname, '../backend/.env');
let envContent = '';
try {
  envContent = readFileSync(envPath, 'utf-8');
} catch (e) {
  console.error("Could not read ../backend/.env", e.message);
  process.exit(1);
}

// Parse simple .env format
const backendEnv = {};
envContent.split('\n').forEach(line => {
  line = line.trim();
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    backendEnv[match[1].trim()] = match[2].trim();
  }
});

const serverCount = parseInt(backendEnv.SERVERS_COUNT) || 1;
const startingServerPort = parseInt(backendEnv.SERVERS_STARTING_PORT) || 8080;
const startingFrontendPort = 3000;

console.log(`Starting ${serverCount} frontend clients...`);

for (let i = 0; i < serverCount; i++) {
  const backendPort = startingServerPort + i;
  const frontendPort = startingFrontendPort + i;
  
  console.log(`[Client ${i + 1}] Starting on port ${frontendPort}, connecting to backend port ${backendPort}`);
  
  spawn('npm', ['run', 'dev', '--', '--port', frontendPort.toString()], {
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      VITE_API_URL: `http://localhost:${backendPort}`,
      VITE_WS_URL: `ws://localhost:${backendPort}/ws`
    }
  });
}
