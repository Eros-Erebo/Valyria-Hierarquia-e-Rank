document.addEventListener('DOMContentLoaded', () => {
    const membros = JSON.parse(localStorage.getItem('membros')) || [
        { nome: 'Willian Vaude', xp: 2988024, nivel: 99 },
        { nome: 'Kota', xp: 1569600, nivel: 73 },
        { nome: 'Aysha Velarion', xp: 1374800, nivel: 68 },
        { nome: 'Elenion', xp: 200800, nivel: 26 },
        { nome: 'Zoro', xp: 198500, nivel: 26 },
        { nome: 'Kaiser', xp: 85000, nivel: 17 },
        { nome: 'Alessa', xp: 43000, nivel: 12 },
        { nome: 'Yuno', xp: 41400, nivel: 12 },
        { nome: 'Lua', xp: 40000, nivel: 12 },
        { nome: 'Callandor', xp: 24000, nivel: 9 },
        { nome: 'Jack', xp: 800, nivel: 2 },
        { nome: 'Marjorie', xp: 0, nivel: 1 },
    ];

    const inputTableBody = document.getElementById('inputTableBody');
    const adicionarMembroForm = document.getElementById('adicionarMembroForm');

    function atualizarTabela() {
        inputTableBody.innerHTML = '';
        membros.forEach(membro => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${membro.nome}</td>
                <td><input type="number" id="xp-${membro.nome.replace(/\s+/g, '')}" value="" /></td>
            `;
            inputTableBody.appendChild(row);
        });
    }

    function calcularNivel(xp) {
        const tabelaXP = [
            { nivel: 1, xp: 0, patente: "Soldado do Reino" },
            { nivel: 2, xp: 300, patente: "Soldado do Reino" },
            { nivel: 3, xp: 1200, patente: "Soldado do Reino" },
            { nivel: 4, xp: 2700, patente: "Soldado do Reino" },
            { nivel: 5, xp: 4800, patente: "Soldado do Reino" },
            { nivel: 6, xp: 7500, patente: "Soldado do Reino" },
            { nivel: 7, xp: 10800, patente: "Soldado do Reino" },
            { nivel: 8, xp: 14700, patente: "Soldado do Reino" },
            { nivel: 9, xp: 19200, patente: "Soldado do Reino" },
            { nivel: 10, xp: 24300, patente: "Guarda Real" },
            { nivel: 11, xp: 30000, patente: "Guarda Real" },
            { nivel: 12, xp: 36300, patente: "Guarda Real" },
            { nivel: 13, xp: 43200, patente: "Guarda Real" },
            { nivel: 14, xp: 50700, patente: "Guarda Real" },
            { nivel: 15, xp: 58800, patente: "Guarda Real" },
            { nivel: 16, xp: 67500, patente: "Sargento do Exército" },
            { nivel: 17, xp: 76800, patente: "Sargento do Exército" },
            { nivel: 18, xp: 86700, patente: "Sargento do Exército" },
            { nivel: 19, xp: 97200, patente: "Sargento do Exército" },
            { nivel: 20, xp: 108300, patente: "Sargento do Exército" },
            { nivel: 21, xp: 120000, patente: "Cavaleiro" },
            { nivel: 22, xp: 132300, patente: "Cavaleiro" },
            { nivel: 23, xp: 145200, patente: "Cavaleiro" },
            { nivel: 24, xp: 158700, patente: "Cavaleiro" },
            { nivel: 25, xp: 172800, patente: "Cavaleiro" },
            { nivel: 26, xp: 187500, patente: "Cavaleiro Veterano" },
            { nivel: 27, xp: 202800, patente: "Cavaleiro Veterano" },
            { nivel: 28, xp: 218700, patente: "Cavaleiro Veterano" },
            { nivel: 29, xp: 235200, patente: "Cavaleiro Veterano" },
            { nivel: 30, xp: 252300, patente: "Cavaleiro Veterano" },
            { nivel: 31, xp: 270000, patente: "Comandante da Guarda" },
            { nivel: 32, xp: 288300, patente: "Comandante da Guarda" },
            { nivel: 33, xp: 307200, patente: "Comandante da Guarda" },
            { nivel: 34, xp: 326700, patente: "Comandante da Guarda" },
            { nivel: 35, xp: 346800, patente: "Comandante da Guarda" },
            { nivel: 36, xp: 367500, patente: "Cavaleiro Tenente" },
            { nivel: 37, xp: 388800, patente: "Cavaleiro Tenente" },
            { nivel: 38, xp: 410700, patente: "Cavaleiro Tenente" },
            { nivel: 39, xp: 433200, patente: "Cavaleiro Tenente" },
            { nivel: 40, xp: 456300, patente: "Cavaleiro Tenente" },
            { nivel: 41, xp: 480000, patente: "Cavaleiro Capitão" },
            { nivel: 42, xp: 504300, patente: "Cavaleiro Capitão" },
            { nivel: 43, xp: 529200, patente: "Cavaleiro Capitão" },
            { nivel: 44, xp: 554700, patente: "Cavaleiro Capitão" },
            { nivel: 45, xp: 580800, patente: "Cavaleiro Capitão" },
            { nivel: 46, xp: 607500, patente: "Lorde Cavaleiro" },
            { nivel: 47, xp: 634800, patente: "Lorde Cavaleiro" },
            { nivel: 48, xp: 662700, patente: "Lorde Cavaleiro" },
            { nivel: 49, xp: 691200, patente: "Lorde Cavaleiro" },
            { nivel: 50, xp: 720300, patente: "Lorde Cavaleiro" },
            { nivel: 51, xp: 750000, patente: "Cavaleiro Comandante" },
            { nivel: 52, xp: 780300, patente: "Cavaleiro Comandante" },
            { nivel: 53, xp: 811200, patente: "Cavaleiro Comandante" },
            { nivel: 54, xp: 842700, patente: "Cavaleiro Comandante" },
            { nivel: 55, xp: 874800, patente: "Cavaleiro Comandante" },
            { nivel: 56, xp: 907500, patente: "Lorde Comandante" },
            { nivel: 57, xp: 940800, patente: "Lorde Comandante" },
            { nivel: 58, xp: 974700, patente: "Lorde Comandante" },
            { nivel: 59, xp: 1009200, patente: "Lorde Comandante" },
            { nivel: 60, xp: 1044300, patente: "Lorde Comandante" },
            { nivel: 61, xp: 1080000, patente: "Mestre de Guerra" },
            { nivel: 62, xp: 1116300, patente: "Mestre de Guerra" },
            { nivel: 63, xp: 1153200, patente: "Mestre de Guerra" },
            { nivel: 64, xp: 1190700, patente: "Mestre de Guerra" },
            { nivel: 65, xp: 1228800, patente: "Mestre de Guerra" },
            { nivel: 66, xp: 1267500, patente: "Comandante de Batalha" },
            { nivel: 67, xp: 1306800, patente: "Comandante de Batalha" },
            { nivel: 68, xp: 1346700, patente: "Comandante de Batalha" },
            { nivel: 69, xp: 1387200, patente: "Comandante de Batalha" },
            { nivel: 70, xp: 1428300, patente: "Comandante de Batalha" },
            { nivel: 71, xp: 1470000, patente: "Senhor da Guerra" },
            { nivel: 72, xp: 1512300, patente: "Senhor da Guerra" },
            { nivel: 73, xp: 1555200, patente: "Senhor da Guerra" },
            { nivel: 74, xp: 1598700, patente: "Senhor da Guerra" },
            { nivel: 75, xp: 1642800, patente: "Senhor da Guerra" },
            { nivel: 76, xp: 1687500, patente: "Grande Mestre da Ordem" },
            { nivel: 77, xp: 1732800, patente: "Grande Mestre da Ordem" },
            { nivel: 78, xp: 1778700, patente: "Grande Mestre da Ordem" },
            { nivel: 79, xp: 1825200, patente: "Grande Mestre da Ordem" },
            { nivel: 80, xp: 1872300, patente: "Grande Mestre da Ordem" },
            { nivel: 81, xp: 1920000, patente: "Comandante Supremo" },
            { nivel: 82, xp: 1968300, patente: "Comandante Supremo" },
            { nivel: 83, xp: 2017200, patente: "Comandante Supremo" },
            { nivel: 84, xp: 2066700, patente: "Comandante Supremo" },
            { nivel: 85, xp: 2116800, patente: "Comandante Supremo" },
            { nivel: 86, xp: 2167500, patente: "Comandante Supremo" },
            { nivel: 87, xp: 2218800, patente: "Comandante Supremo" },
            { nivel: 88, xp: 2270700, patente: "Comandante Supremo" },
            { nivel: 89, xp: 2323200, patente: "Comandante Supremo" },
            { nivel: 90, xp: 2376300, patente: "Comandante Supremo" },
            { nivel: 91, xp: 2430000, patente: "Comandante Supremo" },
            { nivel: 92, xp: 2484300, patente: "Comandante Supremo" },
            { nivel: 93, xp: 2539200, patente: "Comandante Supremo" },
            { nivel: 94, xp: 2594700, patente: "Comandante Supremo" },
            { nivel: 95, xp: 2650800, patente: "Comandante Supremo" },
            { nivel: 96, xp: 2707500, patente: "Comandante Supremo" },
            { nivel: 97, xp: 2764800, patente: "Comandante Supremo" },
            { nivel: 98, xp: 2822700, patente: "Comandante Supremo" },
            { nivel: 99, xp: 2881200, patente: "Comandante Supremo" },
            { nivel: 100, xp: 3000000, patente: "Lorde Supremo" }        
        ];

        // Certifique-se de que qualquer XP acima do maior valor listado receba a patente mais alta
        for (let i = tabelaXP.length - 1; i >= 0; i--) {
            if (xp >= tabelaXP[i].xp) {
                return tabelaXP[i];
            }
        }
        return { nivel: 1, patente: 'Soldado do Reino' };
    }

    window.atualizarXP = function() {
        membros.forEach(membro => {
            const xpInput = document.getElementById(`xp-${membro.nome.replace(/\s+/g, '')}`);
            if (xpInput) {
                const xpAdicional = parseInt(xpInput.value.trim(), 10) || 0;
                membro.xp += xpAdicional;
                const nivelData = calcularNivel(membro.xp);
                membro.nivel = nivelData.nivel;
            }
        });

        salvarDados();
        atualizarResultado(membros);
    }

    function salvarDados() {
        localStorage.setItem('membros', JSON.stringify(membros));
    }

    function atualizarResultado(membros) {
        let textoResultado = '⚜ *Hierarquia e Rank* ⚜\n\n';

        const rainha = 'Liriel Aranel';
        const chanceller = 'Griffth';

        textoResultado += `⚜ *Rainha*\n- ${rainha}\n\n`;
        textoResultado += `⚜ *Chanceller*\n- ${chanceller}\n\n`;

        const hierarquia = {
            'Lorde Supremo': [],
            'Comandante Supremo': [],
            'Grande Mestre da Ordem': [],
            'Senhor da Guerra': [],
            'Comandante de Batalha': [],
            'Mestre de Guerra': [],
            'Lorde Comandante': [],
            'Cavaleiro Comandante': [],
            'Lorde Cavaleiro': [],
            'Cavaleiro Capitão': [],
            'Cavaleiro Tenente': [],
            'Comandante da Guarda': [],
            'Cavaleiro Veterano': [],
            'Cavaleiro': [],
            'Sargento do Exército': [],
            'Guarda Real': [],
            'Soldado do Reino': []
        };

        membros.forEach(membro => {
            const nivelData = calcularNivel(membro.xp);
            const patente = nivelData.patente;
            if (hierarquia[patente]) {
                hierarquia[patente].push({ nome: membro.nome, xp: membro.xp, nivel: membro.nivel });
            }
        });

        // Ordenar membros por patente e XP
        for (let patente in hierarquia) {
            hierarquia[patente].sort((a, b) => b.xp - a.xp);
        }

        for (let patente in hierarquia) {
            if (hierarquia[patente].length > 0) {
                textoResultado += `⚜ *${patente}*\n`;
                hierarquia[patente].forEach(membro => {
                    textoResultado += `- ${membro.nome} | ${membro.xp} xp | Nível ${membro.nivel}\n`;
                });
                textoResultado += '\n';
            }
        }

        document.getElementById('resultado').textContent = textoResultado;
    }

    window.copiarResultado = function() {
        const resultado = document.getElementById('resultado');
        resultado.select();
        document.execCommand('copy');
    }

    window.adicionarMembro = function() {
        const nome = document.getElementById('nome').value;
        const xp = parseInt(document.getElementById('xp').value, 10);

        if (nome && !isNaN(xp)) {
            membros.push({ nome: nome, xp: xp, nivel: calcularNivel(xp).nivel });
            salvarDados();
            atualizarTabela();
            adicionarMembroForm.reset();
            atualizarResultado(membros);
        }
    }

    // Inicializar tabela e resultado
    atualizarTabela();
    atualizarResultado(membros);
});

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'block';
}
