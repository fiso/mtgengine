"use strict";
const Constants = require ("../../../Constants");
const DeepSeaKrakenBase = require("../setDDS/DeepSeaKraken");

class DeepSeaKraken extends DeepSeaKrakenBase {
  constructor (game) {
    super(game, "Deep-Sea Kraken", "Time Spiral", "TSP");
  }
}

module.exports = DeepSeaKraken;
