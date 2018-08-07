"use strict";
const Constants = require ("../../../Constants");
const RuggedHighlandsBase = require("../setDDS/RuggedHighlands");

class RuggedHighlands extends RuggedHighlandsBase {
  constructor (game) {
    super(game, "Rugged Highlands", "Commander 2016", "C16");
  }
}

module.exports = RuggedHighlands;
