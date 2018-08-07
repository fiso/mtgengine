"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerfolkTreasure extends UnimplementedCard {
  constructor (game) {
    super(game, "Merfolk // Treasure", "Friday Night Magic 2018", "F18");
  }
}

module.exports = MerfolkTreasure;
