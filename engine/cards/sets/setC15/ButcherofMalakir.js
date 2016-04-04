"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ButcherofMalakirBase = require("../setC14/ButcherofMalakir.js");

class ButcherofMalakir extends ButcherofMalakirBase {
  constructor(game) {
    super(game, "Butcher of Malakir", "Commander 2015", "C15");
  }
}

module.exports = ButcherofMalakir;
