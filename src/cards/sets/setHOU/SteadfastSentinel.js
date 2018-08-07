"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteadfastSentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Steadfast Sentinel", "Hour of Devastation", "HOU");
  }
}

module.exports = SteadfastSentinel;
