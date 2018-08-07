"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteadfastSentinelToken extends UnimplementedCard {
  constructor (game) {
    super(game, "Steadfast Sentinel Token", "Hour of Devastation Tokens", "THOU");
  }
}

module.exports = SteadfastSentinelToken;
