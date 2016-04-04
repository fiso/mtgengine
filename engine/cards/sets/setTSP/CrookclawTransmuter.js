"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrookclawTransmuterBase = require("../setCNS/CrookclawTransmuter.js");

class CrookclawTransmuter extends CrookclawTransmuterBase {
  constructor(game) {
    super(game, "Crookclaw Transmuter", "Time Spiral", "TSP");
  }
}

module.exports = CrookclawTransmuter;
