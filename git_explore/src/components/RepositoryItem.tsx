
interface RepositoryItemProps {
  repository:{
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props:RepositoryItemProps) {
  return (
    <div className="papelParede">
      <li>
        <strong>{props.repository?.name}</strong>
        <p>Forms in React</p>

        <a href={props.repository.html_url}>Acessar repositorio</a>
      </li>
    </div>
  );
}
