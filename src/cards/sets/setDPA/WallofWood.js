"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofWood extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Wood", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = WallofWood;
