"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Silkwrap extends Card {
  constructor(game) {
    super(game, "Silkwrap", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Silkwrap;
