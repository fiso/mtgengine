"use strict";
const Constants = require ("../../../Constants");
const BogbrewWitchBase = require("../setIMA/BogbrewWitch");

class BogbrewWitch extends BogbrewWitchBase {
  constructor (game) {
    super(game, "Bogbrew Witch", "Magic 2014", "M14");
  }
}

module.exports = BogbrewWitch;
