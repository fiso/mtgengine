"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnortingGahr extends UnimplementedCard {
  constructor (game) {
    super(game, "Snorting Gahr", "Mercadian Masques", "MMQ");
  }
}

module.exports = SnortingGahr;
