function add_bot() {
  window.location.replace("https://discord.com/api/oauth2/authorize?client_id=1164253855102545961&permissions=8&redirect_uri=https%3A%2F%2Fdarkbot-ten.vercel.app&response_type=code&scope=bot%20identify");
}

function get_code() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const ccode = urlParams.get('code');
  console.log(ccode);
}
