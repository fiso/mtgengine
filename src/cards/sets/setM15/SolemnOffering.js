"use strict";
const Constants = require ("../../../Constants");
const SolemnOfferingBase = require("../setM10/SolemnOffering");

class SolemnOffering extends SolemnOfferingBase {
  constructor (game) {
    super(game, "Solemn Offering", "Magic 2015 Core Set", "M15");
  }
}

module.exports = SolemnOffering;
