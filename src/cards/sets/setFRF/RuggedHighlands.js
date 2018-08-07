"use strict";
const Constants = require ("../../../Constants");
const RuggedHighlandsBase = require("../setDDS/RuggedHighlands");

class RuggedHighlands extends RuggedHighlandsBase {
  constructor (game) {
    super(game, "Rugged Highlands", "Fate Reforged", "FRF");
  }
}

module.exports = RuggedHighlands;
