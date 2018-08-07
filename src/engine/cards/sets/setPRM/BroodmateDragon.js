"use strict";
const Constants = require ("../../../Constants");
const BroodmateDragonBase = require("../setC17/BroodmateDragon");

class BroodmateDragon extends BroodmateDragonBase {
  constructor (game) {
    super(game, "Broodmate Dragon", "Magic Online Promos", "PRM");
  }
}

module.exports = BroodmateDragon;
