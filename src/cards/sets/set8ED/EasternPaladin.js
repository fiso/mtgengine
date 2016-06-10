"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EasternPaladin extends UnimplementedCard {
  constructor (game) {
    super(game, "Eastern Paladin", "Eighth Edition", "8ED");
  }
}

module.exports = EasternPaladin;
