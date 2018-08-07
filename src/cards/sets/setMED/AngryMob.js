"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngryMob extends UnimplementedCard {
  constructor (game) {
    super(game, "Angry Mob", "Masters Edition", "MED");
  }
}

module.exports = AngryMob;
