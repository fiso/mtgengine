"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClaimFame extends UnimplementedCard {
  constructor (game) {
    super(game, "Claim // Fame", "Hour of Devastation", "HOU");
  }
}

module.exports = ClaimFame;
