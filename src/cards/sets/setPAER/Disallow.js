"use strict";
const Constants = require ("../../../Constants");
const DisallowBase = require("../setAER/Disallow");

class Disallow extends DisallowBase {
  constructor (game) {
    super(game, "Disallow", "Aether Revolt Promos", "PAER");
  }
}

module.exports = Disallow;
