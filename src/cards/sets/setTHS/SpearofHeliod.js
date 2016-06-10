"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpearofHeliod extends UnimplementedCard {
  constructor (game) {
    super(game, "Spear of Heliod", "Theros", "THS");
  }
}

module.exports = SpearofHeliod;
