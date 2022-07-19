require("dotenv").config();

(async () => {
  try {
    for (i = 0; i < 1; i++) {
      const hexString = i.toString(16);
      const response = await fetch(
        `https://th-api.klaytnapi.com/v2/contract/nft/${process.env.NFT_ADDRESS}/token/0x${hexString}/metadata`,
        {
          method: "PUT",
          headers: {
            "x-chain-id": 8217,
            Authorization: process.env.KAS_AUTHORIZATION,
          },
        }
      );
      const body = await response.text();
      console.log(body);
    }
  } catch (error) {
    console.log(error);
  }
})();
