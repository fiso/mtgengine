"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NestRobber extends UnimplementedCard {
  constructor (game) {
    super(game, "Nest Robber", "Ixalan", "XLN");
  }
}

module.exports = NestRobber;
