"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoonSprite extends Card {
  constructor(game) {
    super(game, "Moon Sprite", "Portal", "POR");
  }
}

module.exports = MoonSprite;
