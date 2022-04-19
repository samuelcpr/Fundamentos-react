export function ReRepositoryItem(props) {
  return (
    <div className="papelParede">
      <li>
        <strong>{props.repository?.name ?? "Default"}</strong>
        <p>Forms in React</p>

        <a href="">Acessar repositorio</a>
      </li>
    </div>
  );
}
