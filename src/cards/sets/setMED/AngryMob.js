"use strict";
const Constants = require ("../../../Constants");
const AngryMobBase = require("../set5ED/AngryMob");

class AngryMob extends AngryMobBase {
  constructor (game) {
    super(game, "Angry Mob", "Masters Edition", "MED");
  }
}

module.exports = AngryMob;
