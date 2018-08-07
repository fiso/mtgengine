"use strict";
const Constants = require ("../../../Constants");
const DauntlessEscortBase = require("../setC16/DauntlessEscort");

class DauntlessEscort extends DauntlessEscortBase {
  constructor (game) {
    super(game, "Dauntless Escort", "Alara Reborn", "ARB");
  }
}

module.exports = DauntlessEscort;
