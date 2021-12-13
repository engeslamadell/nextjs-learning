import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: 1, name: "1st Client" },
    { id: 2, name: "2nd Client" },
    { id: 3, name: "3rd Client" },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
