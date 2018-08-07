"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerfolkLooter extends UnimplementedCard {
  constructor (game) {
    super(game, "Merfolk Looter", "Masters 25", "A25");
  }
}

module.exports = MerfolkLooter;
