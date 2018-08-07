"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeraldoftheFair extends UnimplementedCard {
  constructor (game) {
    super(game, "Herald of the Fair", "Kaladesh", "KLD");
  }
}

module.exports = HeraldoftheFair;
