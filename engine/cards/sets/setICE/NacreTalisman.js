"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NacreTalisman extends UnimplementedCard {
  constructor(game) {
    super(game, "Nacre Talisman", "Ice Age", "ICE");
  }
}

module.exports = NacreTalisman;
