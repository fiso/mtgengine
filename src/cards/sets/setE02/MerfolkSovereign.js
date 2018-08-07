"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerfolkSovereign extends UnimplementedCard {
  constructor (game) {
    super(game, "Merfolk Sovereign", "Explorers of Ixalan", "E02");
  }
}

module.exports = MerfolkSovereign;
