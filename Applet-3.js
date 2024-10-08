class DataLogger{
    constructor(buttonId, cardContainerId, clearButtonId,logCountId){
class DataLogger {
    constructor(buttonId, cardContainerId, clearButtonId, logCountId) {
        this.logButton = document.getElementById(buttonId);
        this.idContainer = document.getElementById(cardContainerId);
        this.cardContainer = document.getElementById(cardContainerId);
        this.clearButton = document.getElementById(clearButtonId);
        this.logCountElement = document.getElementById(logCountId);
        this.logCountElement = document.getElementById(logCountId); 
        this.loggedData = [];

        this.logButton.addEventListener('click', () => this.logData());
        this.clearButton.addEventListener('click', () => this.clearLogs()); 
        this.clearButton.addEventListener('click', () => this.clearLogs());
    }

    logData(){
        const time = new Date().toLocaleString();
        this.loggedData.push(time);
    logData() {
        const timestamp = new Date().toLocaleString();
        this.loggedData.push(timestamp);
        this.updateCardContainer();
    
    }

    clearLogs(){
        this.loggedData = [];
        this.updateCardContainer();
    clearLogs() {
        this.loggedData = []; 
        this.updateCardContainer(); 
    }

    updateCardContainer(){
        this.idContainer.innerHTML = '';
    updateCardContainer() {
        this.cardContainer.innerHTML = '';

        this.loggedData.forEach(data => {
        const card = document.createElement('div');
        card.className = 'card mb-2'; 
        card.innerHTML = `
            
            const card = document.createElement('div');
            card.className = 'card mb-2';
            card.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">Logged Data</h5>
                    <p class="card-text">${data}</p>
                </div>
            `;
            this.idContainer.appendChild(card);
            this.cardContainer.appendChild(card);
        });

        this.displayLogCount();
    }

    countLogs(){
    countLogs() {
        return this.loggedData.length;
    }

    displayLogCount(){
        const logCount =this.countLogs();
    displayLogCount() {
        const logCount = this.countLogs();
        this.logCountElement.innerHTML = `<p>Total Logs: ${logCount}</p>`; 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new DataLogger('logButton', 'idContainer', 'clearButton', 'logCount');
})
    new DataLogger('logButton', 'cardContainer', 'clearButton', 'logCount'); 
});