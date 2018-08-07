"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HematiteTalisman extends UnimplementedCard {
  constructor (game) {
    super(game, "Hematite Talisman", "Ice Age", "ICE");
  }
}

module.exports = HematiteTalisman;
