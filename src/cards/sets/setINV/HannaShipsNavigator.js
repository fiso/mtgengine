"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HannaShipsNavigator extends UnimplementedCard {
  constructor(game) {
    super(game, "Hanna, Ship's Navigator", "Invasion", "INV");
  }
}

module.exports = HannaShipsNavigator;
