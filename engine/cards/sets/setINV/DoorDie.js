"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DoorDie extends Card {
  constructor(game) {
    super(game, "Do or Die", "Invasion", "INV");
  }
}

module.exports = DoorDie;
