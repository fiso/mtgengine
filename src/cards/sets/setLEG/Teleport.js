"use strict";
const Constants = require ("../../../Constants");
const TeleportBase = require("../setCHR/Teleport");

class Teleport extends TeleportBase {
  constructor(game) {
    super(game, "Teleport", "Legends", "LEG");
  }
}

module.exports = Teleport;
