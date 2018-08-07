"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WeiInfantry extends UnimplementedCard {
  constructor (game) {
    super(game, "Wei Infantry", "Masters Edition III", "ME3");
  }
}

module.exports = WeiInfantry;
