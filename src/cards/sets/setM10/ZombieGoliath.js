"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZombieGoliath extends UnimplementedCard {
  constructor (game) {
    super(game, "Zombie Goliath", "Magic 2010", "M10");
  }
}

module.exports = ZombieGoliath;
