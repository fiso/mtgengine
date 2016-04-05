"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoralReef extends UnimplementedCard {
  constructor(game) {
    super(game, "Coral Reef", "Homelands", "HML");
  }
}

module.exports = CoralReef;
