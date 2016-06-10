"use strict";
const Constants = require ("../../../Constants");
const InfestBase = require("../setARC/Infest");

class Infest extends InfestBase {
  constructor (game) {
    super(game, "Infest", "Shards of Alara", "ALA");
  }
}

module.exports = Infest;
