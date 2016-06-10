"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngryMob extends UnimplementedCard {
  constructor (game) {
    super(game, "Angry Mob", "Fifth Edition", "5ED");
  }
}

module.exports = AngryMob;
