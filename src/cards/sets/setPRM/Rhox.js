"use strict";
const Constants = require ("../../../Constants");
const RhoxBase = require("../set10E/Rhox");

class Rhox extends RhoxBase {
  constructor (game) {
    super(game, "Rhox", "Magic Online Promos", "PRM");
  }
}

module.exports = Rhox;
