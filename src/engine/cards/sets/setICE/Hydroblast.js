"use strict";
const Constants = require ("../../../Constants");
const HydroblastBase = require("../setEMA/Hydroblast");

class Hydroblast extends HydroblastBase {
  constructor (game) {
    super(game, "Hydroblast", "Ice Age", "ICE");
  }
}

module.exports = Hydroblast;
