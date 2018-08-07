"use strict";
const Constants = require ("../../../Constants");
const VeinDrinkerBase = require("../setC17/VeinDrinker");

class VeinDrinker extends VeinDrinkerBase {
  constructor (game) {
    super(game, "Vein Drinker", "Shards of Alara", "ALA");
  }
}

module.exports = VeinDrinker;
