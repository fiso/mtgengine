"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TerritorialHammerskull extends UnimplementedCard {
  constructor (game) {
    super(game, "Territorial Hammerskull", "Ixalan", "XLN");
  }
}

module.exports = TerritorialHammerskull;
