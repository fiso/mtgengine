"use strict";
const Constants = require ("../../../Constants");
const DemonsHornBase = require("../setDST/DemonsHorn");

class DemonsHorn extends DemonsHornBase {
  constructor (game) {
    super(game, "Demon's Horn", "Tenth Edition", "10E");
  }
}

module.exports = DemonsHorn;
