"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThassasBounty extends UnimplementedCard {
  constructor(game) {
    super(game, "Thassa's Bounty", "Theros", "THS");
  }
}

module.exports = ThassasBounty;
