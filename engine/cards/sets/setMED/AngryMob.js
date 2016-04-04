"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngryMobBase = require("../set5ED/AngryMob.js");

class AngryMob extends AngryMobBase {
  constructor(game) {
    super(game, "Angry Mob", "Masters Edition", "MED");
  }
}

module.exports = AngryMob;
