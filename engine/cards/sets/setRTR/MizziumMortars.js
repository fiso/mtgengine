"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MizziumMortarsBase = require("../setC15/MizziumMortars.js");

class MizziumMortars extends MizziumMortarsBase {
  constructor(game) {
    super(game, "Mizzium Mortars", "Return to Ravnica", "RTR");
  }
}

module.exports = MizziumMortars;
