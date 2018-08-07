"use strict";
const Constants = require ("../../../Constants");
const ButcherofMalakirBase = require("../setCM2/ButcherofMalakir");

class ButcherofMalakir extends ButcherofMalakirBase {
  constructor (game) {
    super(game, "Butcher of Malakir", "Worldwake", "WWK");
  }
}

module.exports = ButcherofMalakir;
