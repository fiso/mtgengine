"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThornscapeFamiliar extends UnimplementedCard {
  constructor (game) {
    super(game, "Thornscape Familiar", "Planeshift", "PLS");
  }
}

module.exports = ThornscapeFamiliar;
