"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MythRealized extends Card {
  constructor(game) {
    super(game, "Myth Realized", "Dragons of Tarkir", "DTK");
  }
}

module.exports = MythRealized;
