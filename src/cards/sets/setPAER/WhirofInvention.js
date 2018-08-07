"use strict";
const Constants = require ("../../../Constants");
const WhirofInventionBase = require("../setAER/WhirofInvention");

class WhirofInvention extends WhirofInventionBase {
  constructor (game) {
    super(game, "Whir of Invention", "Aether Revolt Promos", "PAER");
  }
}

module.exports = WhirofInvention;
