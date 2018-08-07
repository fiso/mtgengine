"use strict";
const Constants = require ("../../../Constants");
const FrostTitanBase = require("../setC14/FrostTitan");

class FrostTitan extends FrostTitanBase {
  constructor (game) {
    super(game, "Frost Titan", "Magic 2012", "M12");
  }
}

module.exports = FrostTitan;
