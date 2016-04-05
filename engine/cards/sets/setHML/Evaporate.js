"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Evaporate extends UnimplementedCard {
  constructor(game) {
    super(game, "Evaporate", "Homelands", "HML");
  }
}

module.exports = Evaporate;
