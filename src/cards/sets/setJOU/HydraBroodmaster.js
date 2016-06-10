"use strict";
const Constants = require ("../../../Constants");
const HydraBroodmasterBase = require("../setCPK/HydraBroodmaster");

class HydraBroodmaster extends HydraBroodmasterBase {
  constructor (game) {
    super(game, "Hydra Broodmaster", "Journey into Nyx", "JOU");
  }
}

module.exports = HydraBroodmaster;
