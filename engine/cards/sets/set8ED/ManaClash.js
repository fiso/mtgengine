"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaClash extends UnimplementedCard {
  constructor(game) {
    super(game, "Mana Clash", "Eighth Edition", "8ED");
  }
}

module.exports = ManaClash;
