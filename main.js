const nodeData = {
  olt: {
    title: '🏭 Centrale — OLT (Optical Line Terminal)',
    desc: 'La centrale è il punto di partenza della rete FTTH. Qui si trovano gli OLT (Optical Line Terminal), apparati attivi che gestiscono la comunicazione ottica verso tutti gli utenti connessi.',
    items: [
      'Appartiene a FiberCop (ex TIM) o ad altri operatori alternativi',
      'Ogni porta OLT può servire fino a 64 utenti finali tramite splitter',
      'Connessa alla rete backbone tramite fibra ad alta capacità',
      'Gestisce autenticazione e QoS di ogni singolo ONT',
      'Distanza massima dall\'utente: 20 km in fibra monomodale',
    ]
  },
  pfp: {
    title: '📦 Cabinet — PFP / Splitter ottico',
    desc: 'Il PFP (Punto di Flessibilità Primario) è il cabinet stradale dove avviene il primo splitting del segnale. Un\'unica fibra "feeder" dalla centrale viene divisa in più fibre di distribuzione verso gli edifici.',
    items: [
      'Contiene splitter ottici passivi (non richiedono alimentazione)',
      'Rapporto di splitting tipico: 1:8 o 1:16',
      'Situato in pozzetti stradali o armadi a bordo strada',
      'È il punto dove FiberCop gestisce le connessioni degli operatori',
      'Permette di riassegnare una fibra da un operatore all\'altro',
    ]
  },
  pte: {
    title: '🏢 Edificio — PTE e ROE',
    desc: 'Il PTE (Punto di Terminazione d\'Edificio) è dove la fibra entra nel palazzo. Il ROE (Ripartitore Ottico d\'Edificio) è lo splitter secondario che distribuisce la fibra ai singoli appartamenti.',
    items: [
      'PTE: scatola di giunzione sulla facciata o in cantina dell\'edificio',
      'ROE: secondo livello di splitting, tipicamente 1:8 o 1:16',
      'Da qui partono i "drop" — cavi sottili verso ogni appartamento',
      'Installato da FiberCop durante i lavori di cablaggio dell\'edificio',
      'Un edificio può essere collegato anche senza che tutti gli appartamenti abbiano la fibra attiva',
    ]
  },
  ont: {
    title: '🏠 Casa — ONT / ONU (terminale utente)',
    desc: 'L\'ONT (Optical Network Terminal) è il modem ottico installato in casa. Converte il segnale luminoso della fibra in segnale elettrico per il router di casa. A volte è integrato nel router fornito dall\'operatore.',
    items: [
      'Converte luce → segnale Ethernet (o POTS per la linea telefonica)',
      'Fornito dall\'operatore (TIM, WindTre, Fastweb, Vodafone…)',
      'Riconosce la propria "onda" grazie alla tecnologia TDMA/WDM del GPON',
      'Se si cambia operatore, il cablaggio non cambia — cambia solo la configurazione',
      'Velocità tipiche in Italia: 1 Gbps down / 300 Mbps up (piano commerciale)',
    ]
  }
};

const nodes = document.querySelectorAll('.net-node');
const panel = document.getElementById('infoPanel');
const closeBtn = document.getElementById('infoClose');
const panelTitle = document.getElementById('infoPanelTitle');
const panelDesc = document.getElementById('infoPanelDesc');
const panelList = document.getElementById('infoPanelList');

nodes.forEach(node => {
  node.addEventListener('click', () => {
    const key = node.dataset.node;
    const data = nodeData[key];
    if (!data) return;

    panelTitle.textContent = data.title;
    panelDesc.textContent = data.desc;
    panelList.innerHTML = data.items.map(i => `<li>${i}</li>`).join('');

    panel.classList.add('active');
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
});

closeBtn.addEventListener('click', () => {
  panel.classList.remove('active');
});

// Intersection observer per animazioni scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.style.opacity = '1';
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .tl-item, .spec-row').forEach(el => {
  el.style.opacity = '0';
  el.style.transition = 'opacity .5s ease';
  observer.observe(el);
});
