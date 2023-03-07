var form = document.getElementById("formID");
var statusText = document.getElementById("statusText");
form.onsubmit = async (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const url = "http://192.168.5.13:8080/api/posts";
  try {
    const formData = new FormData(form);
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    console.log(response);
    statusText.innerHTML = "Success!";
  } catch (error) {
    console.error(error);
    statusText.innerHTML = "Error! Please check the console.";
  }
};
