"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DemonsHornBase = require("../setDST/DemonsHorn.js");

class DemonsHorn extends DemonsHornBase {
  constructor(game) {
    super(game, "Demon's Horn", "Tenth Edition", "10E");
  }
}

module.exports = DemonsHorn;
