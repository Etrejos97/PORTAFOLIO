# 💼 Portafolio Personal — Edison Trejos

Portafolio personal desarrollado con React + Vite, desplegado en Vercel. Incluye secciones de presentación, habilidades, proyectos y un formulario de contacto funcional con EmailJS.

🔗 **Demo en vivo:** [portafolio-swart-xi.vercel.app](https://portafolio-swart-xi.vercel.app)

---

## 🚀 Tecnologías

| Tecnología | Uso |
|---|---|
| React 19 | Framework UI |
| Vite 8 | Bundler y dev server |
| Bootstrap 5 | Estilos y componentes |
| React Icons | Iconografía |
| AOS | Animaciones scroll |
| EmailJS | Envío de formulario de contacto |
| Vercel | Hosting y despliegue |

---

## 📁 Estructura del proyecto

```
PORTAFOLIO/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## ⚙️ Instalación y uso local

### Prerrequisitos
- Node.js >= 18
- npm >= 9

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/Etrejos97/PORTAFOLIO.git
cd PORTAFOLIO

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales de EmailJS

# 4. Iniciar servidor de desarrollo
npm run dev
```

---

## 🔐 Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
```

Puedes obtener estas credenciales en [emailjs.com](https://www.emailjs.com/).

> ⚠️ El archivo `.env` está incluido en `.gitignore` y nunca debe subirse al repositorio.

---

## 📦 Scripts disponibles

```bash
npm run dev       # Inicia servidor de desarrollo
npm run build     # Genera build de producción
npm run preview   # Previsualiza el build de producción
npm run lint      # Ejecuta ESLint
```

---

## 🌐 Despliegue en Vercel

1. Conecta el repositorio en [vercel.com](https://vercel.com)
2. Agrega las variables de entorno en **Settings → Environment Variables**
3. Vercel despliega automáticamente en cada push a `main`

---

## 📬 Contacto

- **LinkedIn:** [linkedin.com/in/edison-trejos](https://linkedin.com/in/edison-trejos)
- **GitHub:** [@Etrejos97](https://github.com/Etrejos97)
- **Email:** edisontrejospno9.1@gmail.com
