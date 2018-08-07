"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PouncingJaguar extends UnimplementedCard {
  constructor (game) {
    super(game, "Pouncing Jaguar", "Magic Online Promos", "PRM");
  }
}

module.exports = PouncingJaguar;
