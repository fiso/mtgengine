"use strict";
const Constants = require ("../../../Constants");
const ForgestokerDragonBase = require("../setBNG/ForgestokerDragon");

class ForgestokerDragon extends ForgestokerDragonBase {
  constructor (game) {
    super(game, "Forgestoker Dragon", "Magic Online Promos", "PRM");
  }
}

module.exports = ForgestokerDragon;
