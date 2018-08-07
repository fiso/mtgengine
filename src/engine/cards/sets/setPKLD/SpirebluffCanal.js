"use strict";
const Constants = require ("../../../Constants");
const SpirebluffCanalBase = require("../setKLD/SpirebluffCanal");

class SpirebluffCanal extends SpirebluffCanalBase {
  constructor (game) {
    super(game, "Spirebluff Canal", "Kaladesh Promos", "PKLD");
  }
}

module.exports = SpirebluffCanal;
