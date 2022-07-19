(async () => {
  const params = new URLSearchParams();
  params.append("nft-address", "0x5F9739aF3005687D23b7417b85e17E9e930f2Eab");
  params.append("token-id", "0x3e5");
  try {
    const response = await fetch(
      "https://urbancomplex.kr/xpass/metadata/2000.json",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Request-Method":
            "GET",
        }
      }
    );
    const body = await response.text();
    console.log(body);
  } catch (error) {
    console.log(error);
  }
})();
