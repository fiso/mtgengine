"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MistformWarchief extends UnimplementedCard {
  constructor (game) {
    super(game, "Mistform Warchief", "Scourge", "SCG");
  }
}

module.exports = MistformWarchief;
