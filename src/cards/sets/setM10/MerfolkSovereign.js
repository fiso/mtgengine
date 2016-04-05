"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerfolkSovereign extends UnimplementedCard {
  constructor(game) {
    super(game, "Merfolk Sovereign", "Magic 2010", "M10");
  }
}

module.exports = MerfolkSovereign;
