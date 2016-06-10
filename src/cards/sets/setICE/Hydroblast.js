"use strict";
const Constants = require ("../../../Constants");
const HydroblastBase = require("../set5ED/Hydroblast");

class Hydroblast extends HydroblastBase {
  constructor (game) {
    super(game, "Hydroblast", "Ice Age", "ICE");
  }
}

module.exports = Hydroblast;
