"use strict";
const Constants = require ("../../../Constants");
const TeleportalBase = require("../setMM3/Teleportal");

class Teleportal extends TeleportalBase {
  constructor (game) {
    super(game, "Teleportal", "Return to Ravnica", "RTR");
  }
}

module.exports = Teleportal;
