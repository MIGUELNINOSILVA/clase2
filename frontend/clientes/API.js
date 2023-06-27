const urlClientes = "http://localhost/clase2/backend/controller.php?op=getAll";
const urlClientesInsert = "http://localhost/clase2/backend/controller.php?op=insert";
const urlClientesGetOne = "http://localhost/clase2/backend/controller.php?op=one";
const urlClientesUpdate = "http://localhost/clase2/backend/controller.php?op=update";
const urlClientesDelete = "http://localhost/clase2/backend/controller.php?op=delete";

export async function getClientes() {
  try {
    const response = await fetch(urlClientes);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}


export async function insertClientes(data){
    try {
        const response = await fetch(urlClientesInsert, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        window.location = 'cliente.html';
    } catch (error) {
        console.log(error);
    }
}

export async function getOneClientes(id) {
    try {
        const response = await fetch(`${urlClientesGetOne}&id=${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

export async function updateClientes(data){
    try {
        const response = await fetch(urlClientesUpdate,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
    } catch (error) {
        console.log(error);
    }
}

export async function deleteClientes(data) {
    try {
        const response = await fetch(urlClientesDelete, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    } catch (error) {
        console.log(error);
    }
}