const express = require("express");
const router = express.Router();

const {
  createClient,
  getClients,
  getClient,
  updateClient
} = require("../controllers/clientController");

router.route("/").post(createClient).get(getClients);
router.route("/:id").get(getClient).put(updateClient);

module.exports = router;
