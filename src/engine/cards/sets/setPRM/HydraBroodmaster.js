"use strict";
const Constants = require ("../../../Constants");
const HydraBroodmasterBase = require("../setCP1/HydraBroodmaster");

class HydraBroodmaster extends HydraBroodmasterBase {
  constructor (game) {
    super(game, "Hydra Broodmaster", "Magic Online Promos", "PRM");
  }
}

module.exports = HydraBroodmaster;
