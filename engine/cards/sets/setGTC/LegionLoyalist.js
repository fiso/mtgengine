"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LegionLoyalist extends UnimplementedCard {
  constructor(game) {
    super(game, "Legion Loyalist", "Gatecrash", "GTC");
  }
}

module.exports = LegionLoyalist;
