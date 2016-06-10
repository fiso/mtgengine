"use strict";
const Constants = require ("../../../Constants");
const VigorBase = require("../setDPA/Vigor");

class Vigor extends VigorBase {
  constructor (game) {
    super(game, "Vigor", "Lorwyn", "LRW");
  }
}

module.exports = Vigor;
