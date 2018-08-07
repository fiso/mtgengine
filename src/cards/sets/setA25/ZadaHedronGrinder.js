"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZadaHedronGrinder extends UnimplementedCard {
  constructor (game) {
    super(game, "Zada, Hedron Grinder", "Masters 25", "A25");
  }
}

module.exports = ZadaHedronGrinder;
