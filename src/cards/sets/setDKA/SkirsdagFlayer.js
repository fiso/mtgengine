"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkirsdagFlayer extends UnimplementedCard {
  constructor(game) {
    super(game, "Skirsdag Flayer", "Dark Ascension", "DKA");
  }
}

module.exports = SkirsdagFlayer;
