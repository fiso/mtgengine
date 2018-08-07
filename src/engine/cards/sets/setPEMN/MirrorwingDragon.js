"use strict";
const Constants = require ("../../../Constants");
const MirrorwingDragonBase = require("../setEMN/MirrorwingDragon");

class MirrorwingDragon extends MirrorwingDragonBase {
  constructor (game) {
    super(game, "Mirrorwing Dragon", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = MirrorwingDragon;
