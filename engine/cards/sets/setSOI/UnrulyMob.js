"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UnrulyMobBase = require("../setISD/UnrulyMob.js");

class UnrulyMob extends UnrulyMobBase {
  constructor(game) {
    super(game, "Unruly Mob", "Shadows over Innistrad", "SOI");
  }
}

module.exports = UnrulyMob;
