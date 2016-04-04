"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PygmyKavu extends Card {
  constructor(game) {
    super(game, "Pygmy Kavu", "Planeshift", "PLS");
  }
}

module.exports = PygmyKavu;
