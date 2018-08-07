"use strict";
const Constants = require ("../../../Constants");
const VigorBase = require("../setBBD/Vigor");

class Vigor extends VigorBase {
  constructor (game) {
    super(game, "Vigor", "Lorwyn", "LRW");
  }
}

module.exports = Vigor;
