"use strict";
const Constants = require ("../../../Constants");
const SiegeDragonBase = require("../setM15/SiegeDragon");

class SiegeDragon extends SiegeDragonBase {
  constructor (game) {
    super(game, "Siege Dragon", "Magic 2015 Promos", "PM15");
  }
}

module.exports = SiegeDragon;
