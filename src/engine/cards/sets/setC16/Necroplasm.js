"use strict";
const Constants = require ("../../../Constants");
const NecroplasmBase = require("../setCM2/Necroplasm");

class Necroplasm extends NecroplasmBase {
  constructor (game) {
    super(game, "Necroplasm", "Commander 2016", "C16");
  }
}

module.exports = Necroplasm;
