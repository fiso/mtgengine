"use strict";
const Constants = require ("../../../Constants");
const ButcherofMalakirBase = require("../setC14/ButcherofMalakir");

class ButcherofMalakir extends ButcherofMalakirBase {
  constructor(game) {
    super(game, "Butcher of Malakir", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ButcherofMalakir;
