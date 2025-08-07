function showMessage() {
    alert('Login functionality coming soon!');
}
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    window.location.href = "dashboard.html";
  })
  .catch((error) => {
    alert(error.message);
  });
