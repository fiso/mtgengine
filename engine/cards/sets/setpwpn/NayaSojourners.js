"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NayaSojournersBase = require("../setARB/NayaSojourners.js");

class NayaSojourners extends NayaSojournersBase {
  constructor(game) {
    super(game, "Naya Sojourners", "WPN and Gateway", "pWPN");
  }
}

module.exports = NayaSojourners;
