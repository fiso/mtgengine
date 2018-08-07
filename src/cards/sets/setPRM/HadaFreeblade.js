"use strict";
const Constants = require ("../../../Constants");
const HadaFreebladeBase = require("../setPWWK/HadaFreeblade");

class HadaFreeblade extends HadaFreebladeBase {
  constructor (game) {
    super(game, "Hada Freeblade", "Magic Online Promos", "PRM");
  }
}

module.exports = HadaFreeblade;
