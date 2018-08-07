"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreasureHunt extends UnimplementedCard {
  constructor (game) {
    super(game, "Treasure Hunt", "Commander 2018", "C18");
  }
}

module.exports = TreasureHunt;
