"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlaneswalkersFavor extends UnimplementedCard {
  constructor(game) {
    super(game, "Planeswalker's Favor", "Planeshift", "PLS");
  }
}

module.exports = PlaneswalkersFavor;
