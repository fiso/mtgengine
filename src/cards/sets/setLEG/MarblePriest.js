"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarblePriest extends UnimplementedCard {
  constructor(game) {
    super(game, "Marble Priest", "Legends", "LEG");
  }
}

module.exports = MarblePriest;
