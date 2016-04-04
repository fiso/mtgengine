"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HadaFreebladeBase = require("../setWWK/HadaFreeblade.js");

class HadaFreeblade extends HadaFreebladeBase {
  constructor(game) {
    super(game, "Hada Freeblade", "WPN and Gateway", "pWPN");
  }
}

module.exports = HadaFreeblade;
