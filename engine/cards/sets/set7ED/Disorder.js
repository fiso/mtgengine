"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Disorder extends UnimplementedCard {
  constructor(game) {
    super(game, "Disorder", "Seventh Edition", "7ED");
  }
}

module.exports = Disorder;
