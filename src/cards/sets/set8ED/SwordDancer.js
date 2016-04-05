"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwordDancer extends UnimplementedCard {
  constructor(game) {
    super(game, "Sword Dancer", "Eighth Edition", "8ED");
  }
}

module.exports = SwordDancer;
