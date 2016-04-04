"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathbringerRegent extends Card {
  constructor(game) {
    super(game, "Deathbringer Regent", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DeathbringerRegent;
