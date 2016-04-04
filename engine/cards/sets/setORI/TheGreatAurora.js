"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TheGreatAurora extends Card {
  constructor(game) {
    super(game, "The Great Aurora", "Magic Origins", "ORI");
  }
}

module.exports = TheGreatAurora;
