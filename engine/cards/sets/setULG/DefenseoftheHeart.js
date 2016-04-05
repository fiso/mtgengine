"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DefenseoftheHeart extends UnimplementedCard {
  constructor(game) {
    super(game, "Defense of the Heart", "Urza's Legacy", "ULG");
  }
}

module.exports = DefenseoftheHeart;
