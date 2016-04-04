"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PyreZombie extends Card {
  constructor(game) {
    super(game, "Pyre Zombie", "Invasion", "INV");
  }
}

module.exports = PyreZombie;
