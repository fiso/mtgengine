"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Piracy extends UnimplementedCard {
  constructor (game) {
    super(game, "Piracy", "Portal Second Age", "PO2");
  }
}

module.exports = Piracy;
