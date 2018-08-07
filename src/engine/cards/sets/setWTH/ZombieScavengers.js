"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZombieScavengers extends UnimplementedCard {
  constructor (game) {
    super(game, "Zombie Scavengers", "Weatherlight", "WTH");
  }
}

module.exports = ZombieScavengers;
