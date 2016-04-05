"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaPrism extends UnimplementedCard {
  constructor(game) {
    super(game, "Mana Prism", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ManaPrism;
