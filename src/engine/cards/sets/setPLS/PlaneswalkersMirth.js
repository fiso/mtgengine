"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlaneswalkersMirth extends UnimplementedCard {
  constructor (game) {
    super(game, "Planeswalker's Mirth", "Planeshift", "PLS");
  }
}

module.exports = PlaneswalkersMirth;
