"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlaneswalkersMischief extends UnimplementedCard {
  constructor(game) {
    super(game, "Planeswalker's Mischief", "Planeshift", "PLS");
  }
}

module.exports = PlaneswalkersMischief;
