"use strict";
const Constants = require ("../../../Constants");
const BrainMaggotBase = require("../setJOU/BrainMaggot");

class BrainMaggot extends BrainMaggotBase {
  constructor (game) {
    super(game, "Brain Maggot", "Magic Online Promos", "PRM");
  }
}

module.exports = BrainMaggot;
