"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BösiumStrip extends UnimplementedCard {
  constructor(game) {
    super(game, "Bösium Strip", "Weatherlight", "WTH");
  }
}

module.exports = BösiumStrip;
