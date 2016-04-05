"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoxLotus extends UnimplementedCard {
  constructor(game) {
    super(game, "Mox Lotus", "Unhinged", "UNH");
  }
}

module.exports = MoxLotus;
