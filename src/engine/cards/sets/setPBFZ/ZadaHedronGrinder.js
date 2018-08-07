"use strict";
const Constants = require ("../../../Constants");
const ZadaHedronGrinderBase = require("../setA25/ZadaHedronGrinder");

class ZadaHedronGrinder extends ZadaHedronGrinderBase {
  constructor (game) {
    super(game, "Zada, Hedron Grinder", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = ZadaHedronGrinder;
