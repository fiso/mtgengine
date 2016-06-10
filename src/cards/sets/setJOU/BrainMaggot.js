"use strict";
const Constants = require ("../../../Constants");
const BrainMaggotBase = require("../setpFNM/BrainMaggot");

class BrainMaggot extends BrainMaggotBase {
  constructor (game) {
    super(game, "Brain Maggot", "Journey into Nyx", "JOU");
  }
}

module.exports = BrainMaggot;
