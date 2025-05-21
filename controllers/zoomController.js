const axios = require("axios");
const { getZoomAccessToken } = require("../utils/zoomAuth");

exports.createMeeting = async (req, res) => {
  try {
    const token = await getZoomAccessToken();

    const response = await axios.post(
      "https://api.zoom.us/v2/users/me/meetings",
      req.body,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMeeting = async (req, res) => {
  try {
    const token = await getAccessToken();

    const response = await axios.get(
      `https://api.zoom.us/v2/meetings/${req.params.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMeeting = async (req, res) => {
  try {
    const token = await getAccessToken();

    await axios.delete(`https://api.zoom.us/v2/meetings/${req.params.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    res.json({ message: "Meeting deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
