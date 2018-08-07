"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hydra extends UnimplementedCard {
  constructor (game) {
    super(game, "Hydra", "Journey into Nyx Tokens", "TJOU");
  }
}

module.exports = Hydra;
