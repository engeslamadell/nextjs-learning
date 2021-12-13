import { useRouter } from "next/router";

function SelectClientProjectPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>
        The Project page for a specefic project for a specific client Page
      </h1>
    </div>
  );
}

export default SelectClientProjectPage;
