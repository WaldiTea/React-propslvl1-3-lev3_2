import collapsibleInner from "../Data/collapsibleInner.json";
import CollapsibleContent from "./CollapsibleContent";

const Fill = () => {
  return (
    <main>
      {collapsibleInner.map((elem) => <CollapsibleContent
        trigger = {elem.trigger}
        content = {elem.content}
      />)}
    </main>
  );
}

export default Fill;