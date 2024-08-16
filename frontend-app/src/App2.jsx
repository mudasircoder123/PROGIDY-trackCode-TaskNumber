import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Registration from "./Registration";
import Log from "./authentication/Log";
import Host from "./Host";
import Component from "./authentication/Component";
const App2 = () => {
return(
<>
<BrowserRouter>
<Routes>
<Route path="/register" element={<Registration/>}/>
<Route path="/signup" element={<Log/>}/>
<Route path="/" element={<Host/>}/>
<Route path="/component" element={<Component/>}/>
</Routes>
</BrowserRouter>

</>
);
}

export default App2;