class ServiceController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._serviceView = new ServiceView($('#listServices'));
        this._services = services;
    }

    init() {
        this._serviceView.update(this._services);
    }

}