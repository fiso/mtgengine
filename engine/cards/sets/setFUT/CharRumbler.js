"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CharRumbler extends Card {
  constructor(game) {
    super(game, "Char-Rumbler", "Future Sight", "FUT");
  }
}

module.exports = CharRumbler;
