"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CatBurglar extends UnimplementedCard {
  constructor (game) {
    super(game, "Cat Burglar", "Exodus", "EXO");
  }
}

module.exports = CatBurglar;
