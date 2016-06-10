"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarmattanEfreet extends UnimplementedCard {
  constructor (game) {
    super(game, "Harmattan Efreet", "Classic Sixth Edition", "6ED");
  }
}

module.exports = HarmattanEfreet;
