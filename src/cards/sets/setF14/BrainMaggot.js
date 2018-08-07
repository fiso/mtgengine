"use strict";
const Constants = require ("../../../Constants");
const BrainMaggotBase = require("../setJOU/BrainMaggot");

class BrainMaggot extends BrainMaggotBase {
  constructor (game) {
    super(game, "Brain Maggot", "Friday Night Magic 2014", "F14");
  }
}

module.exports = BrainMaggot;
