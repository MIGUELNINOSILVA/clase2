import {getClientes, insertClientes} from "../clientes/API.js";

document.addEventListener("DOMContentLoaded",()=>{
    loadClients();
    addClients();
}
);

const datosClientes = document.querySelector("#datosClientes");
const agregarNuevoCliente = document.querySelector("#agregarNuevoCliente");

async function loadClients() {
    try {
        const data = await getClientes();
        data.forEach(clientes => {
            const {email_contacto, id_constructora, nit_constructora, nombre_constructora, nombre_representante, telefono_contacto} = clientes;
            datosClientes.innerHTML +=`
                <tr>
                    <th scope="row">${id_constructora}</th>
                    <td>${nombre_constructora}</td>
                    <td>${nit_constructora}</td>
                    <td>${nombre_representante}</td>
                    <td>${email_contacto}</td>
                    <td>${telefono_contacto}</td>
                    <td><a class="btn btn-warning" href="../pages/clienteEdit.html?id=${id_constructora}">Editar</a> - <a class="btn btn-danger" href="../pages/clienteEliminar.html?id=${id_constructora}">Eliminar</a></td>
                </tr>
            `;

        });
    } catch (error) {  
        
    }
}

async function addClients(){
    try {
        agregarNuevoCliente.addEventListener('submit', (e)=>{
            e.preventDefault();
            const data = {
                nombre_constructora: document.querySelector("#nombreConstructora").value,
                nit_constructora: document.querySelector("#nitConstructora").value,
                nombre_constructora: document.querySelector("#nombreRepresentanteConstructora").value,
                email_contacto: document.querySelector("#emailConstructora").value,
                telefono_contacto: document.querySelector("#telefonoConstructora").value
            }
            return insertClientes(data);
        })
    } catch (error) {
        
    }
}