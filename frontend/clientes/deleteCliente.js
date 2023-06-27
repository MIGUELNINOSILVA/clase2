import {getOneClientes, deleteClientes} from '../clientes/API.js';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

async function showData() {
    try {
        const clientes = await getOneClientes(id);
        deleteClientes(clientes[0]);
        alert('Dato eliminado satisfactoriamente.');
        window.location = '../pages/cliente.html';
        console.log(clientes[0]);
    } catch (error) {
        console.log(error);
    }
}

showData();