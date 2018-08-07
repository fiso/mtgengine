"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreenwoodSentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Greenwood Sentinel", "Core Set 2019", "M19");
  }
}

module.exports = GreenwoodSentinel;
