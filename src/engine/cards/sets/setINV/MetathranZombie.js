"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MetathranZombie extends UnimplementedCard {
  constructor (game) {
    super(game, "Metathran Zombie", "Invasion", "INV");
  }
}

module.exports = MetathranZombie;
