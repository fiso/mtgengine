"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FountainofYouth extends UnimplementedCard {
  constructor(game) {
    super(game, "Fountain of Youth", "Chronicles", "CHR");
  }
}

module.exports = FountainofYouth;
