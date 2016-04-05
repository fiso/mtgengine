"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Spirespine extends UnimplementedCard {
  constructor(game) {
    super(game, "Spirespine", "Journey into Nyx", "JOU");
  }
}

module.exports = Spirespine;
