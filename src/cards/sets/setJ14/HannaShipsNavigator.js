"use strict";
const Constants = require ("../../../Constants");
const HannaShipsNavigatorBase = require("../setA25/HannaShipsNavigator");

class HannaShipsNavigator extends HannaShipsNavigatorBase {
  constructor (game) {
    super(game, "Hanna, Ship's Navigator", "Judge Gift Cards 2014", "J14");
  }
}

module.exports = HannaShipsNavigator;
