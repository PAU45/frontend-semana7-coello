import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Verificar si Vite está instalado
function checkViteVersion() {
  exec('npx vite --version', (error, stdout, stderr) => {
    if (error) {
      console.error('Error al obtener la versión de Vite:', error);
      return;
    }
    console.log('Versión de Vite:', stdout);
  });
}

// Verificar si los archivos necesarios existen en el proyecto
function checkFilesExist() {
  const requiredFiles = [
    './index.html',
    './src/main.jsx',
    './src/App.jsx',
    './vite.config.js',
    './package.json'
  ];

  requiredFiles.forEach((file) => {
    if (fs.existsSync(file)) {
      console.log(`Archivo encontrado: ${file}`);
    } else {
      console.error(`Falta el archivo: ${file}`);
    }
  });
}

// Verificar la estructura de las carpetas
function checkDirectoryStructure() {
  const srcDir = path.join(__dirname, 'src');
  const publicDir = path.join(__dirname, 'public');

  console.log('Verificando estructura de carpetas...');
  if (fs.existsSync(srcDir)) {
    console.log('Carpeta src encontrada.');
  } else {
    console.error('Falta la carpeta src.');
  }

  if (fs.existsSync(publicDir)) {
    console.log('Carpeta public encontrada.');
  } else {
    console.error('Falta la carpeta public.');
  }
}

// Verificar el contenido de package.json (si contiene las dependencias adecuadas)
function checkPackageJson() {
  const packageJson = path.join(__dirname, 'package.json');

  if (fs.existsSync(packageJson)) {
    const packageData = JSON.parse(fs.readFileSync(packageJson, 'utf-8'));
    console.log('Dependencias en package.json:');
    console.log('Dependencias principales:', packageData.dependencies);
    console.log('Dependencias de desarrollo:', packageData.devDependencies);
  } else {
    console.error('Falta el archivo package.json');
  }
}

// Ejecutar las funciones de verificación
function runDebug() {
  console.log('Iniciando la depuración...');

  // Verificar la versión de Vite
  checkViteVersion();

  // Verificar si los archivos necesarios existen
  checkFilesExist();

  // Verificar la estructura de carpetas
  checkDirectoryStructure();

  // Verificar el contenido de package.json
  checkPackageJson();
}

runDebug();
