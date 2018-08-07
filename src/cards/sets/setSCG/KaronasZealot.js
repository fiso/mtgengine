"use strict";
const Constants = require ("../../../Constants");
const KaronasZealotBase = require("../setA25/KaronasZealot");

class KaronasZealot extends KaronasZealotBase {
  constructor (game) {
    super(game, "Karona's Zealot", "Scourge", "SCG");
  }
}

module.exports = KaronasZealot;
