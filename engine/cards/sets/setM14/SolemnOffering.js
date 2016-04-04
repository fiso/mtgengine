"use strict";
const Constants = require ("../../../Constants");
const SolemnOfferingBase = require("../setM10/SolemnOffering");

class SolemnOffering extends SolemnOfferingBase {
  constructor(game) {
    super(game, "Solemn Offering", "Magic 2014 Core Set", "M14");
  }
}

module.exports = SolemnOffering;
