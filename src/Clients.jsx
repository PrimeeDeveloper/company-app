import { useState, useEffect } from 'react';
import axios from 'axios';

function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users') 
      .then(response => {
        setClients(response.data);
      })
      .catch(error => {
        console.error("Terjadi kesalahan saat mengambil data klien", error);
      });
  }, []);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Daftar Klien</h2>
      <ul className="list-group">
        {clients.length > 0 ? (
          clients.map(client => (
            <li key={client.id} className="list-group-item">
              <h5>{client.name}</h5>
              <p>{client.email}</p>
              <small>{client.company.name}</small>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
};

export default Clients;
