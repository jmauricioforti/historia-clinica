// frontend/login.js
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const usuario = document.getElementById("usuario").value.trim();
  const clave = document.getElementById("clave").value.trim();

  try {
    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario, password: clave })
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("usuario", usuario);
      localStorage.setItem("token", data.token);
      window.location.href = "index.html";
    } else {
      document.getElementById("error").textContent = "Credenciales incorrectas";
    }
  } catch (err) {
    document.getElementById("error").textContent = "Error de conexión con el servidor";
  }
});
