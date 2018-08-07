"use strict";
const Constants = require ("../../../Constants");
const MaritLageBase = require("../setV16/MaritLage");

class MaritLage extends MaritLageBase {
  constructor (game) {
    super(game, "Marit Lage", "Coldsnap Tokens", "TCSP");
  }
}

module.exports = MaritLage;
