"use strict";
const Constants = require ("../../../Constants");
const InfestBase = require("../setCN2/Infest");

class Infest extends InfestBase {
  constructor (game) {
    super(game, "Infest", "Shards of Alara", "ALA");
  }
}

module.exports = Infest;
