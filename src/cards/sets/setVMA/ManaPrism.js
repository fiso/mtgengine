"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaPrism extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana Prism", "Vintage Masters", "VMA");
  }
}

module.exports = ManaPrism;
