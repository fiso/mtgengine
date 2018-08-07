"use strict";
const Constants = require ("../../../Constants");
const SiegeDragonBase = require("../setM15/SiegeDragon");

class SiegeDragon extends SiegeDragonBase {
  constructor (game) {
    super(game, "Siege Dragon", "Magic Online Promos", "PRM");
  }
}

module.exports = SiegeDragon;
