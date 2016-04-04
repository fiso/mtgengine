"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DenProtector extends Card {
  constructor(game) {
    super(game, "Den Protector", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DenProtector;
