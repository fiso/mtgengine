"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FatedRetribution extends UnimplementedCard {
  constructor(game) {
    super(game, "Fated Retribution", "Born of the Gods", "BNG");
  }
}

module.exports = FatedRetribution;
