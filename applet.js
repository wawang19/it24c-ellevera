class AppletGallery {
    constructor(dataUrl) {
      this.dataUrl = dataUrl;
      this.appletgallery = [];
      this.init();
    }
  
    async init() {
      await this.fetchData();
      this.renderAppletGallery(this.appletgallery); 
      this.bindSearchEvent();
    }
  
    async fetchData() {
      try {
        const response = await fetch(this.dataUrl);
        this.appletgallery = await response.json();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    renderAppletGallery(appletgallery) {
      const appletgalleryCont = document.getElementById('appletgalleryCont');
      appletgalleryCont.innerHTML = appletgallery.map(applet => 
        `<div class="card"> 
           <img src="${applet.image}" class="card-img-top" alt="${applet.title}">
           <h5>${applet.title}</h5>
           <p>${applet.description}</p>
           <a href="${applet.link}" class="btn btn-primary">Go to Applet</a>
        </div>`
      ).join('');
    }
  
    bindSearchEvent() {
      const appletSearchBar = document.getElementById('appletSearchBar'); 
  
      appletSearchBar.addEventListener('input', () => {
        this.filterApplet(appletSearchBar.value);
      });
    }
  
    filterApplet(query) {
      const filteredapplet = this.appletgallery.filter(applet => {
        return applet.title.toLowerCase().includes(query.toLowerCase());
      });
  
      this.renderAppletGallery(filteredapplet);
    }
  }
  
  const appletgallery = new AppletGallery('applet.json');