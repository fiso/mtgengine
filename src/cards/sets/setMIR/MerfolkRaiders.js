"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerfolkRaiders extends UnimplementedCard {
  constructor(game) {
    super(game, "Merfolk Raiders", "Mirage", "MIR");
  }
}

module.exports = MerfolkRaiders;
