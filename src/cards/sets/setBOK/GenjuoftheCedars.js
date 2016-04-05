"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GenjuoftheCedars extends UnimplementedCard {
  constructor(game) {
    super(game, "Genju of the Cedars", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = GenjuoftheCedars;
