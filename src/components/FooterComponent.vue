<template>
    <footer class="site-footer">
      <div class="footer-container">
        <!-- Sección logo e información -->
        <div class="footer-section">
          <div class="footer-brand">
            <img :src="logo" alt="Logo Plan Campeche" class="footer-logo">
            <span class="footer-title">Plan Campeche</span>
          </div>
          <p class="footer-description">
            Descubre los mejores lugares y eventos en Campeche. Conectamos visitantes con lo mejor de nuestra región.
          </p>
          <div class="social-links">
            <a href="#" class="social-link"><i class="pi pi-facebook"></i></a>
            <a href="#" class="social-link"><i class="pi pi-instagram"></i></a>
            <a href="#" class="social-link"><i class="pi pi-tiktok"></i></a>
          </div>
        </div>
  
        <!-- Sección de enlaces rápidos -->
        <div class="footer-section">
          <h3 class="footer-heading">Enlaces Rápidos</h3>
          <ul class="footer-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/">Eventos</a></li>
            <li><a href="/">Noticias</a></li>
            <li><a href="/contactanos">Contacto</a></li>
            <li><a href="/">Términos y condiciones</a></li>
          </ul>
        </div>
  
        <!-- Sección de contacto para negocios -->
        <div class="footer-section">
          <h3 class="footer-heading">Publicidad</h3>
          <p class="business-text">
            <strong>Publicita tu negocio en nuestra plataforma</strong> y llega a miles de visitantes interesados en lo que Campeche tiene para ofrecer.
          </p>
          <div class="contact-info">
            <p><i class="pi pi-envelope"></i> publicidad@plancampeche.com</p>
            <p><i class="pi pi-phone"></i> +52 981 123 4567</p>
            <p><i class="pi pi-map-marker"></i> Campeche, México</p>
          </div>
          <button class="contact-button" @click="openContactModal">
            Contáctanos
          </button>
        </div>
      </div>
  
      <!-- Copyright -->
      <div class="copyright">
        <p>&copy; 2025 Plan Campeche. Todos los derechos reservados.</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import logo from '@/assets/logo.png'
  
  const openContactModal = () => {
    // Aquí puedes implementar la lógica para abrir un modal de contacto
    console.log('Abrir formulario de contacto para publicidad')
  }
  </script>
  
  <style scoped>
  /* Estilos del footer */
  .site-footer {
    background-color: #1a1a1a;
    color: #ffffff;
    padding: 3rem 0 0;
    font-family: 'Arial', sans-serif;
  }
  
  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .footer-section {
    margin-bottom: 2rem;
  }
  
  .footer-brand {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .footer-logo {
    height: 40px;
    width: auto;
    margin-right: 0.75rem;
  }
  
  .footer-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
  }
  
  .footer-description {
    color: #b3b3b3;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  .social-links {
    display: flex;
    gap: 1rem;
  }
  
  .social-link {
    color: #ffffff;
    font-size: 1.25rem;
    transition: color 0.3s;
  }
  
  .social-link:hover {
    color: #11B981;
  }
  
  .footer-heading {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    color: #ffffff;
    position: relative;
    padding-bottom: 0.5rem;
  }
  
  .footer-heading::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50px;
    height: 2px;
    background-color: #11B981;
  }
  
  .footer-links {
    list-style: none;
    padding: 0;
  }
  
  .footer-links li {
    margin-bottom: 0.75rem;
  }
  
  .footer-links a {
    color: #b3b3b3;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .footer-links a:hover {
    color: #11B981;
  }
  
  .business-text {
    color: #b3b3b3;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  .contact-info {
    margin-bottom: 1.5rem;
  }
  
  .contact-info p {
    color: #b3b3b3;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
  }
  
  .contact-info i {
    margin-right: 0.5rem;
    color: #11B981;
  }
  
  .contact-button {
    background-color: #11B981;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s;
  }
  
  .contact-button:hover {
    background-color: #0fa971;
  }
  
  .copyright {
    background-color: #0d0d0d;
    padding: 1rem;
    text-align: center;
    color: #b3b3b3;
    font-size: 0.9rem;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .footer-container {
      grid-template-columns: 1fr;
    }
  }
  </style>