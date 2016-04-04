"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HydraBroodmasterBase = require("../setCPK/HydraBroodmaster.js");

class HydraBroodmaster extends HydraBroodmasterBase {
  constructor(game) {
    super(game, "Hydra Broodmaster", "Journey into Nyx", "JOU");
  }
}

module.exports = HydraBroodmaster;
