"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BosiumStrip extends UnimplementedCard {
  constructor (game) {
    super(game, "Bösium Strip", "Weatherlight", "WTH");
  }
}

module.exports = BosiumStrip;
