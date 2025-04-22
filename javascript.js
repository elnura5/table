const forum_seyfesi = document.querySelector(".forum_seyfesi");
const background = document.querySelector(".background");
let pix = 10;
function renderForm() {
  forum_seyfesi.innerHTML = `
    <div class="basliq">
      <h2>Image Password Strength</h2>
      <p>Change the password to see the effect</p>
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  `;

  background.style.filter = `blur(${pix}px)`;
}

renderForm();


forum_seyfesi.addEventListener('input', (e) => {
  if (e.target.id === "exampleInputPassword1") {
    const length = e.target.value.length;
    let blur = Math.max(0, 10 - length); 
    background.style.filter = `blur(${blur}px)`;
  }
});

