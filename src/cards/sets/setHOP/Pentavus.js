"use strict";
const Constants = require ("../../../Constants");
const PentavusBase = require("../setCM2/Pentavus");

class Pentavus extends PentavusBase {
  constructor (game) {
    super(game, "Pentavus", "Planechase", "HOP");
  }
}

module.exports = Pentavus;
