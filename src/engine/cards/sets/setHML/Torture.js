"use strict";
const Constants = require ("../../../Constants");
const TortureBase = require("../setSHM/Torture");

class Torture extends TortureBase {
  constructor (game) {
    super(game, "Torture", "Homelands", "HML");
  }
}

module.exports = Torture;
