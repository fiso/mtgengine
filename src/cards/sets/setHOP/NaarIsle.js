"use strict";
const Constants = require ("../../../Constants");
const NaarIsleBase = require("../setPCA/NaarIsle");

class NaarIsle extends NaarIsleBase {
  constructor (game) {
    super(game, "Naar Isle", "Planechase", "HOP");
  }
}

module.exports = NaarIsle;
