class Pessoa {
    constructor(nome, login, senha){
        this._nome = nome;
        this._login = login;
        this._senha = senha;
    }

    get nome(){
        return this._nome;
    }

    get login(){
        return this._login;
    }

    get senha(){
        return this._senha;
    }
} 