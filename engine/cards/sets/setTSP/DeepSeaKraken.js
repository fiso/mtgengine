"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeepSeaKrakenBase = require("../setC14/DeepSeaKraken.js");

class DeepSeaKraken extends DeepSeaKrakenBase {
  constructor(game) {
    super(game, "Deep-Sea Kraken", "Time Spiral", "TSP");
  }
}

module.exports = DeepSeaKraken;
