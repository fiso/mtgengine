"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScatheZombies extends UnimplementedCard {
  constructor (game) {
    super(game, "Scathe Zombies", "Tenth Edition", "10E");
  }
}

module.exports = ScatheZombies;
