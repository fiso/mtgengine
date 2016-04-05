"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorruptEunuchs extends UnimplementedCard {
  constructor(game) {
    super(game, "Corrupt Eunuchs", "Masters Edition III", "ME3");
  }
}

module.exports = CorruptEunuchs;
