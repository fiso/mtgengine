"use strict";
const Constants = require ("../../../Constants");
const VeteranCavalierBase = require("../set9ED/VeteranCavalier");

class VeteranCavalier extends VeteranCavalierBase {
  constructor (game) {
    super(game, "Veteran Cavalier", "Starter 1999", "S99");
  }
}

module.exports = VeteranCavalier;
