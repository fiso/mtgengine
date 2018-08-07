"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlackCarriage extends UnimplementedCard {
  constructor (game) {
    super(game, "Black Carriage", "Homelands", "HML");
  }
}

module.exports = BlackCarriage;
