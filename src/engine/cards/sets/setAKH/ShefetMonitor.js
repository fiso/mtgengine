"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShefetMonitor extends UnimplementedCard {
  constructor (game) {
    super(game, "Shefet Monitor", "Amonkhet", "AKH");
  }
}

module.exports = ShefetMonitor;
