"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GodosIrregulars extends UnimplementedCard {
  constructor (game) {
    super(game, "Godo's Irregulars", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = GodosIrregulars;
