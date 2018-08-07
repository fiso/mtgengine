"use strict";
const Constants = require ("../../../Constants");
const SolemnOfferingBase = require("../setBBD/SolemnOffering");

class SolemnOffering extends SolemnOfferingBase {
  constructor (game) {
    super(game, "Solemn Offering", "Magic 2010", "M10");
  }
}

module.exports = SolemnOffering;
