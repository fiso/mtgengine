"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MurderInvestigation extends UnimplementedCard {
  constructor (game) {
    super(game, "Murder Investigation", "Magic Origins", "ORI");
  }
}

module.exports = MurderInvestigation;
