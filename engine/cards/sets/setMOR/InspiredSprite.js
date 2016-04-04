"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InspiredSprite extends Card {
  constructor(game) {
    super(game, "Inspired Sprite", "Morningtide", "MOR");
  }
}

module.exports = InspiredSprite;
