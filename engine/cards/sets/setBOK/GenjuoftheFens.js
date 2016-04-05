"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GenjuoftheFens extends UnimplementedCard {
  constructor(game) {
    super(game, "Genju of the Fens", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = GenjuoftheFens;
