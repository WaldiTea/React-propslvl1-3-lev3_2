import Collapsible from 'react-collapsible';

const CollapsibleContent = (props) => {
  return (
    <Collapsible trigger={props.trigger}>
      <p>{props.content}</p>
    </Collapsible>
  );
}

export default CollapsibleContent;