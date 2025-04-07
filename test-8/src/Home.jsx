import React from "react";

function Home({ user, setUser }) {
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const handleDeleteAccount = () => {
    localStorage.removeItem("user");
    setUser(null);
    alert("Account deleted");
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.name}</h2>
          <button onClick={handleLogout}>Logout</button>
          <button onClick={handleDeleteAccount}>Delete Account</button>
        </div>
      ) : (
        <div>
          <h2>Guest</h2>
          <button onClick={() => setUser({ name: "Guest" })}>Login as Guest</button>
        </div>
      )}
    </div>
  );
}

export default Home;
