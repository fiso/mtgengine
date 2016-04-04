"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TezzeretsGambitBase = require("../setMM2/TezzeretsGambit.js");

class TezzeretsGambit extends TezzeretsGambitBase {
  constructor(game) {
    super(game, "Tezzeret's Gambit", "New Phyrexia", "NPH");
  }
}

module.exports = TezzeretsGambit;
