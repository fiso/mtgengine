"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FatedInfatuation extends UnimplementedCard {
  constructor (game) {
    super(game, "Fated Infatuation", "Born of the Gods", "BNG");
  }
}

module.exports = FatedInfatuation;
