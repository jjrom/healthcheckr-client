import { Routes, Route } from '@solidjs/router';
import Header from "./components/Header";

import Services from "./routes/Services";
import Service from "./routes/Service";

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" component={Services} />
        <Route path="/:id" component={Service} />
      </Routes>
    </div>
  );
}

export default App;
