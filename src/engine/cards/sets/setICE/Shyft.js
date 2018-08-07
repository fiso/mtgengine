"use strict";
const Constants = require ("../../../Constants");
const ShyftBase = require("../setME2/Shyft");

class Shyft extends ShyftBase {
  constructor (game) {
    super(game, "Shyft", "Ice Age", "ICE");
  }
}

module.exports = Shyft;
