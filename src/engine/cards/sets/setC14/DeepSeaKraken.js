"use strict";
const Constants = require ("../../../Constants");
const DeepSeaKrakenBase = require("../setDDS/DeepSeaKraken");

class DeepSeaKraken extends DeepSeaKrakenBase {
  constructor (game) {
    super(game, "Deep-Sea Kraken", "Commander 2014", "C14");
  }
}

module.exports = DeepSeaKraken;
