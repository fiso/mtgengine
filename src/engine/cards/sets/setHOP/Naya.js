"use strict";
const Constants = require ("../../../Constants");
const NayaBase = require("../setPCA/Naya");

class Naya extends NayaBase {
  constructor (game) {
    super(game, "Naya", "Planechase", "HOP");
  }
}

module.exports = Naya;
