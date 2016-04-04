"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NorthernPaladin extends UnimplementedCard {
  constructor(game) {
    super(game, "Northern Paladin", "Collector's Edition", "CED");
  }
}

module.exports = NorthernPaladin;
