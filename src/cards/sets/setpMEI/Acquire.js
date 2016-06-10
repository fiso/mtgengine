"use strict";
const Constants = require ("../../../Constants");
const AcquireBase = require("../set5DN/Acquire");

class Acquire extends AcquireBase {
  constructor (game) {
    super(game, "Acquire", "Media Inserts", "pMEI");
  }
}

module.exports = Acquire;
