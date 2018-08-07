"use strict";
const Constants = require ("../../../Constants");
const OrggBase = require("../setTSB/Orgg");

class Orgg extends OrggBase {
  constructor (game) {
    super(game, "Orgg", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = Orgg;
