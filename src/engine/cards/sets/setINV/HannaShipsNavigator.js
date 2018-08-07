"use strict";
const Constants = require ("../../../Constants");
const HannaShipsNavigatorBase = require("../setA25/HannaShipsNavigator");

class HannaShipsNavigator extends HannaShipsNavigatorBase {
  constructor (game) {
    super(game, "Hanna, Ship's Navigator", "Invasion", "INV");
  }
}

module.exports = HannaShipsNavigator;
