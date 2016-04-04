"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZadaHedronGrinder extends Card {
  constructor(game) {
    super(game, "Zada, Hedron Grinder", "Battle for Zendikar", "BFZ");
  }
}

module.exports = ZadaHedronGrinder;
