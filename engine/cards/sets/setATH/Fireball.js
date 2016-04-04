"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Fireball extends Card {
  constructor(game) {
    super(game, "Fireball", "Anthologies", "ATH");
  }
}

module.exports = Fireball;
