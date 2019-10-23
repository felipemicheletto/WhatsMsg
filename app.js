window.addEventListener("load", () => {
  let sendMessage = document.querySelector(".send");
  let number = document.getElementById("nmb");
  let phoneNumber = number.value;

  sendMessage.addEventListener("click", () => {
    phoneNumber = number.value;
    const api = `https://web.whatsapp.com/send?phone=5541${phoneNumber}`;
    window.open(api);
  });
});
