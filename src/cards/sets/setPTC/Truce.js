"use strict";
const Constants = require ("../../../Constants");
const TruceBase = require("../set5ED/Truce");

class Truce extends TruceBase {
  constructor (game) {
    super(game, "Truce", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = Truce;
