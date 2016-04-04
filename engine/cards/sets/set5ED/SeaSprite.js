"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeaSprite extends Card {
  constructor(game) {
    super(game, "Sea Sprite", "Fifth Edition", "5ED");
  }
}

module.exports = SeaSprite;
