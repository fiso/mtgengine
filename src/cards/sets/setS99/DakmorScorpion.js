"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DakmorScorpion extends UnimplementedCard {
  constructor (game) {
    super(game, "Dakmor Scorpion", "Starter 1999", "S99");
  }
}

module.exports = DakmorScorpion;
