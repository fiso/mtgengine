"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeclarationinStone extends Card {
  constructor(game) {
    super(game, "Declaration in Stone", "Shadows over Innistrad", "SOI");
  }
}

module.exports = DeclarationinStone;
