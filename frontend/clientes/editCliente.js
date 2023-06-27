import {
    getOneClientes,
    updateClientes
} from '../clientes/API.js';

document.addEventListener('DOMContentLoaded',()=>{
    loadContent();
    editContent();
}
    );

const editNombreConstructora = document.querySelector('#editNombreConstructora');
const editNitConstructora = document.querySelector('#editNitConstructora');
const editNombreRepresentanteConstructora = document.querySelector('#editNombreRepresentanteConstructora');
const editEmailConstructora = document.querySelector('#editEmailConstructora');
const editTelefonoConstructora = document.querySelector('#editTelefonoConstructora');
const formularioEdit = document.querySelector('#formularioEdit');

async function loadContent() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        const data = await getOneClientes(id);
        console.log(data[0]);
        editNombreConstructora.value = data[0].nombre_constructora;
        editNitConstructora.value = data[0].nit_constructora;
        editNombreRepresentanteConstructora.value = data[0].nombre_representante;
        editEmailConstructora.value = data[0].email_contacto;
        editTelefonoConstructora.value = data[0].telefono_contacto;
        
    } catch (error) {
        console.log(error);
    }


}

async function editContent() {
    try {
        formularioEdit.addEventListener('submit', (e)=>{
            e.preventDefault();
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            const dataJson = {
                "id_constructora": id,
                "nombre_constructora": editNombreConstructora.value,
                "nit_constructora": editNitConstructora.value,
                "nombre_representante": editNombreRepresentanteConstructora.value,
                "email_contacto": editEmailConstructora.value,
                "telefono_contacto": editTelefonoConstructora.value
            }
            console.log(dataJson);
            updateClientes(dataJson);
            alert('Datos actualizados correctamente.');
            window.location = '../pages/cliente.html';
        });

    } catch (error) {
        console.log(error);
    }
}