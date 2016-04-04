"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AngryMob extends Card {
  constructor(game) {
    super(game, "Angry Mob", "Fifth Edition", "5ED");
  }
}

module.exports = AngryMob;
