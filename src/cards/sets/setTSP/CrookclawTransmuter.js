"use strict";
const Constants = require ("../../../Constants");
const CrookclawTransmuterBase = require("../setCNS/CrookclawTransmuter");

class CrookclawTransmuter extends CrookclawTransmuterBase {
  constructor (game) {
    super(game, "Crookclaw Transmuter", "Time Spiral", "TSP");
  }
}

module.exports = CrookclawTransmuter;
