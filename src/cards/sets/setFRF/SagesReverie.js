"use strict";
const Constants = require ("../../../Constants");
const SagesReverieBase = require("../setC18/SagesReverie");

class SagesReverie extends SagesReverieBase {
  constructor (game) {
    super(game, "Sage's Reverie", "Fate Reforged", "FRF");
  }
}

module.exports = SagesReverie;
