"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormCrow extends UnimplementedCard {
  constructor(game) {
    super(game, "Storm Crow", "Alliances", "ALL");
  }
}

module.exports = StormCrow;
