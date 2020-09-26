class ServiceView {

    constructor(elemento) {
        this._elemento = elemento;
    }

    _template(data) {
            return `
            <ul>
                ${data.map(item => `
                    <li>
                        <h3>${item.titulo}</h3>
                        <p>${item.descricao}</p>
                        <p>Preço: A partir de ${item.preco} ${item.mensal === true ? 'por mês' : ''}</p>
                    </li>
                `).join('')}
            </ul>
        `
    }

    update(data){
       this._elemento.innerHTML = this._template(data); 
    }
}