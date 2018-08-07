"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WastelandScorpion extends UnimplementedCard {
  constructor (game) {
    super(game, "Wasteland Scorpion", "Amonkhet", "AKH");
  }
}

module.exports = WastelandScorpion;
