import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    // do something
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: router.query.id, clientprojectid: "projectA" },
    });
  }
  return (
    <div>
      <h1>The Projects of a given client Page</h1>
      <button onClick={loadProjectHandler}>Load project A</button>
    </div>
  );
}

export default ClientProjectsPage;
