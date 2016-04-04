"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MetathranZombie extends Card {
  constructor(game) {
    super(game, "Metathran Zombie", "Invasion", "INV");
  }
}

module.exports = MetathranZombie;
