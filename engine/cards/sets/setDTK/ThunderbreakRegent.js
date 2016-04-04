"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThunderbreakRegent extends Card {
  constructor(game) {
    super(game, "Thunderbreak Regent", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ThunderbreakRegent;
