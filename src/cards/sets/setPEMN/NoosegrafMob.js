"use strict";
const Constants = require ("../../../Constants");
const NoosegrafMobBase = require("../setBBD/NoosegrafMob");

class NoosegrafMob extends NoosegrafMobBase {
  constructor (game) {
    super(game, "Noosegraf Mob", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = NoosegrafMob;
