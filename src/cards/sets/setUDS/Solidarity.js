"use strict";
const Constants = require ("../../../Constants");
const SolidarityBase = require("../set8ED/Solidarity");

class Solidarity extends SolidarityBase {
  constructor (game) {
    super(game, "Solidarity", "Urza's Destiny", "UDS");
  }
}

module.exports = Solidarity;
