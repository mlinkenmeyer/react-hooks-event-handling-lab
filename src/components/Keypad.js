// Code Keypad Component Here

function Keypad() {
  function getPassword() {
    console.log("Entering password...");
  }
  return (
    <form>
      <input onChange={getPassword} type="password" />
    </form>
  );
}

export default Keypad;
