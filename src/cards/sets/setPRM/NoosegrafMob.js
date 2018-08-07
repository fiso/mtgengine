"use strict";
const Constants = require ("../../../Constants");
const NoosegrafMobBase = require("../setBBD/NoosegrafMob");

class NoosegrafMob extends NoosegrafMobBase {
  constructor (game) {
    super(game, "Noosegraf Mob", "Magic Online Promos", "PRM");
  }
}

module.exports = NoosegrafMob;
