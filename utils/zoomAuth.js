const axios = require("axios");
const qs = require("qs");

let ZOOM_ACCOUNT_ID = "vfGpO090TTOTy2L6dAlB2Q";
let ZOOM_CLIENT_ID = "VRbBejfsQKKZ0bOqzvLghg";
let ZOOM_CLIENT_SECRET = "8r0gM61Nx0lFUjCtR3ezPUSTza3Tak44";
let PORT = "8001";
async function getZoomAccessToken() {
  const tokenUrl = `https://zoom.us/oauth/token`;
  const payload = qs.stringify({
    grant_type: "account_credentials",
    account_id: ZOOM_ACCOUNT_ID,
  });

  const authHeader = Buffer.from(
    `${ZOOM_CLIENT_ID}:${ZOOM_CLIENT_SECRET}`
  ).toString("base64");

  const response = await axios.post(tokenUrl, payload, {
    headers: {
      Authorization: `Basic ${authHeader}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return response.data.access_token;
}

module.exports = { getZoomAccessToken };
