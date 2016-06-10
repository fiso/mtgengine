"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScatheZombies extends UnimplementedCard {
  constructor (game) {
    super(game, "Scathe Zombies", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ScatheZombies;
