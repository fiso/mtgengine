"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HannaShipsNavigator extends Card {
  constructor(game) {
    super(game, "Hanna, Ship's Navigator", "Invasion", "INV");
  }
}

module.exports = HannaShipsNavigator;
