"use strict";
const Constants = require ("../../../Constants");
const NecroplasmBase = require("../setCM2/Necroplasm");

class Necroplasm extends NecroplasmBase {
  constructor (game) {
    super(game, "Necroplasm", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Necroplasm;
