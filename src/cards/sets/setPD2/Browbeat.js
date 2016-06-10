"use strict";
const Constants = require ("../../../Constants");
const BrowbeatBase = require("../setDDK/Browbeat");

class Browbeat extends BrowbeatBase {
  constructor (game) {
    super(game, "Browbeat", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = Browbeat;
