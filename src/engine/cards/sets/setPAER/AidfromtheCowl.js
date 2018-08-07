"use strict";
const Constants = require ("../../../Constants");
const AidfromtheCowlBase = require("../setAER/AidfromtheCowl");

class AidfromtheCowl extends AidfromtheCowlBase {
  constructor (game) {
    super(game, "Aid from the Cowl", "Aether Revolt Promos", "PAER");
  }
}

module.exports = AidfromtheCowl;
