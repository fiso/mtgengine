"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LavaballTrap extends UnimplementedCard {
  constructor (game) {
    super(game, "Lavaball Trap", "Zendikar", "ZEN");
  }
}

module.exports = LavaballTrap;
