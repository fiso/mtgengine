"use strict";
const Constants = require ("../../../Constants");
const MizziumMortarsBase = require("../setMM3/MizziumMortars");

class MizziumMortars extends MizziumMortarsBase {
  constructor (game) {
    super(game, "Mizzium Mortars", "Commander 2015", "C15");
  }
}

module.exports = MizziumMortars;
