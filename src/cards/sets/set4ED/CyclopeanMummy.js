"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CyclopeanMummy extends UnimplementedCard {
  constructor (game) {
    super(game, "Cyclopean Mummy", "Fourth Edition", "4ED");
  }
}

module.exports = CyclopeanMummy;
