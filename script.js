// Example for Dashboard charts (cash flow, net worth, savings)
const cashFlowCtx = document.getElementById('cashFlowChart')?.getContext('2d');
const netWorthCtx = document.getElementById('netWorthChart')?.getContext('2d');
const savingsCtx = document.getElementById('savingsChart')?.getContext('2d');

function createChart(ctx, label, data, color) {
    if(!ctx) return;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets:[{label: label, data: data, borderColor: color, fill:false}]
        },
        options:{responsive:true, scales:{y:{beginAtZero:true}}}
    });
}

// Dummy data
createChart(cashFlowCtx,'Cash Flow',[5000,4000,4500,6000,5000,7000,6500,7000,7500,8000,8200,9000],'#2d3e50');
createChart(netWorthCtx,'Net Worth',[20000,21000,22000,23000,24000,25000,26000,27000,28000,29000,30000,31000],'#f39c12');
createChart(savingsCtx,'Savings',[1000,1200,1500,1700,2000,2300,2500,2700,3000,3300,3600,4000],'#27ae60');
    