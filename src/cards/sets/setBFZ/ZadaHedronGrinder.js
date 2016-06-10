"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZadaHedronGrinder extends UnimplementedCard {
  constructor (game) {
    super(game, "Zada, Hedron Grinder", "Battle for Zendikar", "BFZ");
  }
}

module.exports = ZadaHedronGrinder;
