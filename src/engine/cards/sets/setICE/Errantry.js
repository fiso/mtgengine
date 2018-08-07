"use strict";
const Constants = require ("../../../Constants");
const ErrantryBase = require("../setME2/Errantry");

class Errantry extends ErrantryBase {
  constructor (game) {
    super(game, "Errantry", "Ice Age", "ICE");
  }
}

module.exports = Errantry;
