"use strict";
const Constants = require ("../../../Constants");
const RotfeasterMaggotBase = require("../setBBD/RotfeasterMaggot");

class RotfeasterMaggot extends RotfeasterMaggotBase {
  constructor (game) {
    super(game, "Rotfeaster Maggot", "Magic 2015", "M15");
  }
}

module.exports = RotfeasterMaggot;
