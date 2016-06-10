"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CloudSprite extends UnimplementedCard {
  constructor (game) {
    super(game, "Cloud Sprite", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = CloudSprite;
