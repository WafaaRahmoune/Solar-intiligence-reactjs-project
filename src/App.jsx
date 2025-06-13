
import './index.css';
import logo from './assets/logo.png'
import ContactForm from './Contactform';
import Footer from './Footer';
function App() {

  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#apropos">À propos</a></li>
          <li><a href="#produit">Produit</a></li>
          <li><a href="#temoignages">Témoignages</a></li>
          <li><a href="#telecharger">Télécharger</a></li>
          <li><a href="#contact">Contact</a></li>
         
        </ul>
      </nav>

      
      <div className="hero-container">
      <div class="solar-background">
        
        <div class="circuit-lines"></div>
        
      
        <div class="sun-rays"></div>
        
       
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        
        
        <div class="energy-wave"></div>
        <div class="energy-wave"></div>
        <div class="energy-wave"></div>
    </div>
    </div>

 
    <div class="main-content" id="accueil">
        <h1 class="title">Sunflow</h1>
        <p class="subtitle">L'intelligence solaire au service de l'Algérie</p>
        <p class="description">
            Régulateur de charge solaire intelligent adaptatif pour systèmes photovoltaïques autonomes
        </p>
        <p class="slogan">→ Une solution 100% locale, efficace, durable</p>
        <button class="btn">Découvrir maintenant</button>
    </div>








      <div id="apropos" className="about-section">
  <h2 className="about-title">À propos</h2>
  <div className="about-cards">
    <div className="about-card">
    <h3>1️⃣ Qui sommes-nous ?</h3>
    

      <p><strong>Sunflow® est une startup technologique algérienne</strong> fondée par des ingénieurs diplômés de l'École nationale polytechnique d'Oran, spécialisés en génie électrique – Automatique.</p>
      <p>Née dans les laboratoires de l'incubateur de l'École nationale polytechnique d'Oran, l'idée de Sunflow est apparue comme une évidence : adapter les technologies avancées du spatial pour résoudre un problème local, celui de l'accès fiable à l'énergie solaire dans les régions rurales.</p>
    </div>

     <div className="about-card">
     <h3>2️⃣ Une technologie engagée</h3>

      <p>Sunflow n'est pas un simple appareil électronique. C'est un symbole :</p>
      <ul>
        <li>de <strong>fierté technologique algérienne</strong></li>
        <li>de <strong>justice énergétique</strong> pour les zones oubliées</li>
        <li>de <strong>durabilité</strong> et d'accompagnement local</li>
      </ul>
    </div>

    <div className="about-card">
    <h3>3️⃣ Notre mission</h3>
    
      <p>Chez Sunflow, nous croyons que le soleil algérien peut être une source d'énergie propre, accessible et intelligente.</p>
      <p>Nous avons conçu un <strong>régulateur solaire MPPT 100% local</strong>, robuste, intelligent et à bas coût, capable de résister aux conditions climatiques extrêmes (sable, chaleur, surtension).</p>
    </div>

   

    <div className="about-card">
    <h3>4️⃣ Nos valeurs</h3>

  <ul>
    <li><strong>Innovation frugale</strong> : chaque fonction est pensée pour maximiser l'efficacité sans complexité inutile.</li>
    <li><strong>Engagement local</strong> : chaîne d'approvisionnement nationale, SAV régionalisé.</li>
    <li><strong>Impact social</strong> : formations gratuites, partenariat avec ONG.</li>
    <li><strong>Écologie patriotique</strong> : un produit qui respecte l'environnement.</li>
  </ul>
</div>

  </div>
</div>

<div className='containeridentity'>
<div className='about-card identity'>
  <h3> Où nous trouver ?</h3>
  <p><strong>Sunflow est actuellement incubée au sein de l’École Nationale Polytechnique d’Oran (ENPO)</strong>, un écosystème propice à l’innovation technologique et à l’émergence de solutions locales à fort impact.</p>

  <p>Située au cœur de la dynamique entrepreneuriale algérienne, notre startup bénéficie d’un accompagnement stratégique, d’un réseau académique solide et d’un environnement stimulant pour le développement de technologies de rupture.</p>

  <p><strong>Notre ambition :</strong> devenir le premier fabricant national de <strong>régulateurs solaires intelligents certifiés CE</strong>, en amorçant une expansion progressive vers l’ensemble du Maghreb.</p>
</div>
</div>




{/* section produit  */}

<div className="product-scroll-section" id="produit">
  <h2 className="about-title">Produit</h2>
  <div className="product-scroll-wrapper">
    <div className="product-scroll-track">
      <div className="product-card">⚙️ Type : <br/> MPPT intelligent (Maximum Power Point Tracking)</div>
      <div className="product-card">🔌 Tension d’entrée : <br/> 12V / 24V (automatique)</div>
      <div className="product-card">🔋 Courant max : <br/> Jusqu’à 20A</div>
      <div className="product-card">🚀 Rendement : <br/>  97,2 % (adaptatif)</div>
      <div className="product-card">🖥️ Interface : <br/> LCD – FR/AR + LED</div>
      <div className="product-card">🌡️ Température : <br/> –10 °C à +60 °C</div>
      <div className="product-card">📏 Dimensions : <br/> 150 × 86 × 34 mm</div>
      <div className="product-card">⚖️ Poids : <br/> 650 g</div>
      <div className="product-card">🛡️ Garantie : <br/> 10 ans</div>
      <div className="product-card">🇩🇿 Fabrication : <br/> 100% Algérienne</div>
    </div>
  </div>
</div>


{/* section temoignage */}

<div className="testimonial-section" id="temoignages">
  <h2 className="testimonial-title">Témoignages  </h2>
  
  <div className="testimonial-card">
    
    <p className="testimonial-quote">
      “Le régulateur <strong>Sunflow</strong> a transformé notre exploitation agricole. Grâce à sa 
      <strong>technologie MPPT intelligente</strong>, nous avons augmenté notre rendement énergétique de plus de <strong>30 %</strong>.
      <br/>
      Notre système d’irrigation solaire fonctionne parfaitement, même pendant les périodes de forte chaleur.
      <br/>
      <em>Un produit algérien de qualité internationale !</em>”
    </p>
    
    <div className="testimonial-author">
      <h4>Ahmed Benali</h4>
      <p>Agriculteur – Région de Ouargla</p>
    </div>
  </div>
</div>

{/* section telechargement  */}

<section class="download-section" id="telecharger">
  <h2 class="download-title">📥 Télécharger</h2>
  <div class="download-container">
    
    <div class="download-card">
      <div class="download-icon">📄</div>
      <h3>Fiche technique PDF</h3>
      <p>
        Téléchargez la fiche technique complète du régulateur Sunflow® MPPT avec toutes les spécifications détaillées.
      </p>
      <a href="../public/documents/document.pdf"  download target="_blank" class="download-btn">📥 Télécharger PDF</a>
    </div>

    <div class="download-card">
      <div class="download-icon">📊</div>
      <h3>Présentation PowerPoint</h3>
      <p>
        Présentation commerciale complète pour découvrir tous les avantages et applications du régulateur Sunflow.
      </p>
      <a href="../public/documents/document.pptx"  download target="_blank" class="download-btn">📥 Télécharger PPT</a>
    </div>

    <div class="download-card">
      <div class="download-icon">📘</div>
      <h3>Guide d'installation</h3>
      <p>
        Manuel d'installation et d'utilisation en français et arabe pour une mise en service optimale.
      </p>
      <a href="../public/documents/document.pdf" download target="_blank" class="download-btn">📥 Télécharger Guide</a>
    </div>

  </div>
</section>


{/* conatact us form */}

<ContactForm />
<Footer />

      {/* Sections cibles pour le scroll
      <div id="apropos" className="section">Section À propos</div>
      <div id="produit" className="section">Section Produit</div>
      <div id="applications" className="section">Section Applications</div>
      <div id="temoignages" className="section">Section Témoignages</div>
      <div id="contact" className="section">Section Contact</div>
      <div id="telecharger" className="section">Section Télécharger</div> */}
    </>
  );
}

export default App
