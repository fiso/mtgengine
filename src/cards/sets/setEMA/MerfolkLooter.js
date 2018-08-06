"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerfolkLooter extends UnimplementedCard {
  constructor (game) {
    super(game, "Merfolk Looter", "Eternal Masters", "EMA");
  }
}

module.exports = MerfolkLooter;
