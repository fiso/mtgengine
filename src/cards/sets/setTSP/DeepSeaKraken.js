"use strict";
const Constants = require ("../../../Constants");
const DeepSeaKrakenBase = require("../setC14/DeepSeaKraken");

class DeepSeaKraken extends DeepSeaKrakenBase {
  constructor (game) {
    super(game, "Deep-Sea Kraken", "Time Spiral", "TSP");
  }
}

module.exports = DeepSeaKraken;
