"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FatedReturn extends UnimplementedCard {
  constructor(game) {
    super(game, "Fated Return", "Born of the Gods", "BNG");
  }
}

module.exports = FatedReturn;
