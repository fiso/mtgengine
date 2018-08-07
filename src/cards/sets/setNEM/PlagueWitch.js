"use strict";
const Constants = require ("../../../Constants");
const PlagueWitchBase = require("../setEMA/PlagueWitch");

class PlagueWitch extends PlagueWitchBase {
  constructor (game) {
    super(game, "Plague Witch", "Nemesis", "NEM");
  }
}

module.exports = PlagueWitch;
