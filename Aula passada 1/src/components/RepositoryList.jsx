import { ReRepositoryItem } from "./RepositoryItem";

const repository = {
  nome: "unform",
  desciption: "Froms in React",
  link: "https://github.com/unform/unform",
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1 id="text">lista de repositorios</h1>

      <ul>
        <ReRepositoryItem repository={repository} />
        <ReRepositoryItem repository={repository} />
        <ReRepositoryItem repository={repository} />
        <ReRepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
