"use strict";
const Constants = require ("../../../Constants");
const HadaFreebladeBase = require("../setWWK/HadaFreeblade");

class HadaFreeblade extends HadaFreebladeBase {
  constructor (game) {
    super(game, "Hada Freeblade", "WPN and Gateway", "pWPN");
  }
}

module.exports = HadaFreeblade;
