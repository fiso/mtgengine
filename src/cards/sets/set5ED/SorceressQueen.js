"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SorceressQueen extends UnimplementedCard {
  constructor (game) {
    super(game, "Sorceress Queen", "Fifth Edition", "5ED");
  }
}

module.exports = SorceressQueen;
