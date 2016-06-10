"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PouncingJaguar extends UnimplementedCard {
  constructor (game) {
    super(game, "Pouncing Jaguar", "Arena League", "pARL");
  }
}

module.exports = PouncingJaguar;
