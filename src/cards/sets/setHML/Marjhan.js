"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Marjhan extends UnimplementedCard {
  constructor (game) {
    super(game, "Marjhan", "Homelands", "HML");
  }
}

module.exports = Marjhan;
