"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Manabarbs extends UnimplementedCard {
  constructor(game) {
    super(game, "Manabarbs", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Manabarbs;
