"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BombSquad extends Card {
  constructor(game) {
    super(game, "Bomb Squad", "Odyssey", "ODY");
  }
}

module.exports = BombSquad;
