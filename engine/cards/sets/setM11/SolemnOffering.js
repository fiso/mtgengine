"use strict";
const Constants = require ("../../../Constants");
const SolemnOfferingBase = require("../setM10/SolemnOffering");

class SolemnOffering extends SolemnOfferingBase {
  constructor(game) {
    super(game, "Solemn Offering", "Magic 2011", "M11");
  }
}

module.exports = SolemnOffering;
