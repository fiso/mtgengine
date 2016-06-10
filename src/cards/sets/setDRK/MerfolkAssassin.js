"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerfolkAssassin extends UnimplementedCard {
  constructor (game) {
    super(game, "Merfolk Assassin", "The Dark", "DRK");
  }
}

module.exports = MerfolkAssassin;
