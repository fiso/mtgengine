"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerfolkMistbinder extends UnimplementedCard {
  constructor (game) {
    super(game, "Merfolk Mistbinder", "Rivals of Ixalan", "RIX");
  }
}

module.exports = MerfolkMistbinder;
