"use strict";
const Constants = require ("../../../Constants");
const HydroblastBase = require("../setEMA/Hydroblast");

class Hydroblast extends HydroblastBase {
  constructor (game) {
    super(game, "Hydroblast", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = Hydroblast;
