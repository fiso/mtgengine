"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SquirrelDealer extends UnimplementedCard {
  constructor (game) {
    super(game, "Squirrel Dealer", "Unstable", "UST");
  }
}

module.exports = SquirrelDealer;
