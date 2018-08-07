"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WeldfastMonitor extends UnimplementedCard {
  constructor (game) {
    super(game, "Weldfast Monitor", "Kaladesh", "KLD");
  }
}

module.exports = WeldfastMonitor;
