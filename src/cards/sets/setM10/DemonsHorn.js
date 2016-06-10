"use strict";
const Constants = require ("../../../Constants");
const DemonsHornBase = require("../setDST/DemonsHorn");

class DemonsHorn extends DemonsHornBase {
  constructor (game) {
    super(game, "Demon's Horn", "Magic 2010", "M10");
  }
}

module.exports = DemonsHorn;
