"use strict";
const Constants = require ("../../../Constants");
const PutrefyBase = require("../setC18/Putrefy");

class Putrefy extends PutrefyBase {
  constructor (game) {
    super(game, "Putrefy", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = Putrefy;
