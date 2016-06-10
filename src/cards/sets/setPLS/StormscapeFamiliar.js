"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormscapeFamiliar extends UnimplementedCard {
  constructor (game) {
    super(game, "Stormscape Familiar", "Planeshift", "PLS");
  }
}

module.exports = StormscapeFamiliar;
