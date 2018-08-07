"use strict";
const Constants = require ("../../../Constants");
const HydroblastBase = require("../setEMA/Hydroblast");

class Hydroblast extends HydroblastBase {
  constructor (game) {
    super(game, "Hydroblast", "Masters Edition", "MED");
  }
}

module.exports = Hydroblast;
