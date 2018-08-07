"use strict";
const Constants = require ("../../../Constants");
const HydroblastBase = require("../setEMA/Hydroblast");

class Hydroblast extends HydroblastBase {
  constructor (game) {
    super(game, "Hydroblast", "World Championship Decks 1997", "WC97");
  }
}

module.exports = Hydroblast;
