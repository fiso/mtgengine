"use strict";
const Constants = require ("../../../Constants");
const StifleBase = require("../setMP2/Stifle");

class Stifle extends StifleBase {
  constructor (game) {
    super(game, "Stifle", "Magic Online Promos", "PRM");
  }
}

module.exports = Stifle;
