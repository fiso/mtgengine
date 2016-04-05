"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlaneswalkersFury extends UnimplementedCard {
  constructor(game) {
    super(game, "Planeswalker's Fury", "Planeshift", "PLS");
  }
}

module.exports = PlaneswalkersFury;
