"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SalvagingStation extends UnimplementedCard {
  constructor(game) {
    super(game, "Salvaging Station", "Fifth Dawn", "5DN");
  }
}

module.exports = SalvagingStation;
