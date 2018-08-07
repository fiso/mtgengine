"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SmartAss extends UnimplementedCard {
  constructor (game) {
    super(game, "Smart Ass", "Unhinged", "UNH");
  }
}

module.exports = SmartAss;
