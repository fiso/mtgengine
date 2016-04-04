"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Retribution extends UnimplementedCard {
  constructor(game) {
    super(game, "Retribution", "Homelands", "HML");
  }
}

module.exports = Retribution;
