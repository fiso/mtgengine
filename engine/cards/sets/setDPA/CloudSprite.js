"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CloudSprite extends Card {
  constructor(game) {
    super(game, "Cloud Sprite", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = CloudSprite;
