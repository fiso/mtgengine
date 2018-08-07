"use strict";
const Constants = require ("../../../Constants");
const ZulaportCutthroatBase = require("../setA25/ZulaportCutthroat");

class ZulaportCutthroat extends ZulaportCutthroatBase {
  constructor (game) {
    super(game, "Zulaport Cutthroat", "Battle for Zendikar", "BFZ");
  }
}

module.exports = ZulaportCutthroat;
