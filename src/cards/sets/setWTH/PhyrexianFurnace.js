"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianFurnace extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Furnace", "Weatherlight", "WTH");
  }
}

module.exports = PhyrexianFurnace;
