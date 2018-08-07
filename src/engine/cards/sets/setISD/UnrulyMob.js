"use strict";
const Constants = require ("../../../Constants");
const UnrulyMobBase = require("../setSOI/UnrulyMob");

class UnrulyMob extends UnrulyMobBase {
  constructor (game) {
    super(game, "Unruly Mob", "Innistrad", "ISD");
  }
}

module.exports = UnrulyMob;
