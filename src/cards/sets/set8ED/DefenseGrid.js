"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DefenseGrid extends UnimplementedCard {
  constructor (game) {
    super(game, "Defense Grid", "Eighth Edition", "8ED");
  }
}

module.exports = DefenseGrid;
