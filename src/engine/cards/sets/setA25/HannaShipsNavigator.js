"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HannaShipsNavigator extends UnimplementedCard {
  constructor (game) {
    super(game, "Hanna, Ship's Navigator", "Masters 25", "A25");
  }
}

module.exports = HannaShipsNavigator;
