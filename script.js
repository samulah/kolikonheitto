let flipHistory = [];
let kusiCount = 0;
let munaCount = 0;

function flipCoin() {
    const coin = document.getElementById('coin');
    const resultText = document.getElementById('result');
    const historyList = document.getElementById('history');
    const kusiPercentage = document.getElementById('kusiPercentage');
    const munaPercentage = document.getElementById('munaPercentage');

    coin.classList.add('flip');
    
    setTimeout(() => {
        const isHeads = Math.random() < 0.5;
        coin.classList.remove('flip');
        coin.style.transform = `rotateY(${isHeads ? 0 : 180}deg)`;
        
        const result = isHeads ? 'Kusi' : 'Muna';
        resultText.textContent = result;
        
        // Update flip history and counts
        flipHistory.push(result);
        if (result === 'Kusi') {
            kusiCount++;
        } else {
            munaCount++;
        }
        
        // Update history display
        const historyItem = document.createElement('li');
        historyItem.textContent = result;
        historyList.appendChild(historyItem);
        
        // Update statistics
        const totalFlips = kusiCount + munaCount;
        const kusiPercentageValue = ((kusiCount / totalFlips) * 100).toFixed(2);
        const munaPercentageValue = ((munaCount / totalFlips) * 100).toFixed(2);
        
        kusiPercentage.textContent = `Kusi: ${kusiPercentageValue}%`;
        munaPercentage.textContent = `Muna: ${munaPercentageValue}%`;
    }, 1000);
}
