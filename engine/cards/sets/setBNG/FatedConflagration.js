"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FatedConflagration extends UnimplementedCard {
  constructor(game) {
    super(game, "Fated Conflagration", "Born of the Gods", "BNG");
  }
}

module.exports = FatedConflagration;
