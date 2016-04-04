"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HannaShipsNavigatorBase = require("../setINV/HannaShipsNavigator.js");

class HannaShipsNavigator extends HannaShipsNavigatorBase {
  constructor(game) {
    super(game, "Hanna, Ship's Navigator", "Judge Gift Program", "pJGP");
  }
}

module.exports = HannaShipsNavigator;
