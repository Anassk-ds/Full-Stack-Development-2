import { useState } from 'react'; 
function App() 
{
const [loggedIn, setLoggedIn] = useState(false); 
return
 (
<div>
<h2>Conditional Rendering</h2>
{ loggedIn ? <p>Welcome User</p> : <p>Please Login</p> }
<button onClick={()=>setLoggedIn(!loggedIn)}>{loggedIn ? "Logout" : "Login"} </button>
</div>
 );
}
export default App;
