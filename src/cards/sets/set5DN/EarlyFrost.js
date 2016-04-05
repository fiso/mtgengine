"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EarlyFrost extends UnimplementedCard {
  constructor(game) {
    super(game, "Early Frost", "Fifth Dawn", "5DN");
  }
}

module.exports = EarlyFrost;
