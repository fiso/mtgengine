"use strict";
const Constants = require ("../../../Constants");
const NayaSojournersBase = require("../setARB/NayaSojourners");

class NayaSojourners extends NayaSojournersBase {
  constructor(game) {
    super(game, "Naya Sojourners", "WPN and Gateway", "pWPN");
  }
}

module.exports = NayaSojourners;
