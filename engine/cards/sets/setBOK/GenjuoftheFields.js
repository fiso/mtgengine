"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GenjuoftheFields extends UnimplementedCard {
  constructor(game) {
    super(game, "Genju of the Fields", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = GenjuoftheFields;
