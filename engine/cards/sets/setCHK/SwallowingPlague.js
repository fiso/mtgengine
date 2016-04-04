"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SwallowingPlague extends Card {
  constructor(game) {
    super(game, "Swallowing Plague", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SwallowingPlague;
