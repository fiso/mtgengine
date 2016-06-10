"use strict";
const Constants = require ("../../../Constants");
const UnrulyMobBase = require("../setISD/UnrulyMob");

class UnrulyMob extends UnrulyMobBase {
  constructor (game) {
    super(game, "Unruly Mob", "Shadows over Innistrad", "SOI");
  }
}

module.exports = UnrulyMob;
