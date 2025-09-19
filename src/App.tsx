import "./App.css";
import Alert from "./components/ui/Alert/Alert";
import {
  Ban,
  TriangleAlert,
  Info,
  CircleCheckBig,
  BellRing,
} from "lucide-react";

const description: string =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur recusandae illum sit reprehenderit corrupti suscipit expedita perspiciatis, quo repellendus esse ut saepe porro, deleniti nostrum quae qui, dolor laboriosam tempora.";

function App() {
  return (
    <>
      <Alert
        type={"alert-error"}
        icon={<Ban size={22} />}
        title={"Error Occurred"}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          recusandae illum sit reprehenderit corrupti suscipit expedita
          perspiciatis, quo <a href="/">repellendus esse ut saepe porro</a>, deleniti nostrum
          quae qui, dolor laboriosam tempora.
        </p>
      </Alert>
      <Alert
        type={"alert-warning"}
        icon={<TriangleAlert size={22} />}
        title={"Something went wrong"}
        description={description}
      />
      <Alert
        type={"alert-info"}
        icon={<Info size={22} />}
        title={"Information"}
        description={description}
      />
      <Alert
        type={"alert-success"}
        icon={<CircleCheckBig size={22} />}
        title={"Success!"}
        description={description}
      />
      <Alert
        type={"alert-default"}
        icon={<BellRing size={22} />}
        title={"Note"}
        description={description}
      />
    </>
  );
}

export default App;
