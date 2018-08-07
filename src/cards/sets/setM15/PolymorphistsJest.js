"use strict";
const Constants = require ("../../../Constants");
const PolymorphistsJestBase = require("../setC17/PolymorphistsJest");

class PolymorphistsJest extends PolymorphistsJestBase {
  constructor (game) {
    super(game, "Polymorphist's Jest", "Magic 2015", "M15");
  }
}

module.exports = PolymorphistsJest;
