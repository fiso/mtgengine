"use strict";
const Constants = require ("../../../Constants");
const NecropotenceBase = require("../setIMA/Necropotence");

class Necropotence extends NecropotenceBase {
  constructor (game) {
    super(game, "Necropotence", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = Necropotence;
