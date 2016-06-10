"use strict";
const Constants = require ("../../../Constants");
const BroodmateDragonBase = require("../setpMEI/BroodmateDragon");

class BroodmateDragon extends BroodmateDragonBase {
  constructor (game) {
    super(game, "Broodmate Dragon", "Shards of Alara", "ALA");
  }
}

module.exports = BroodmateDragon;
