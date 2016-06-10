"use strict";
const Constants = require ("../../../Constants");
const HeartlessHidetsuguBase = require("../setBOK/HeartlessHidetsugu");

class HeartlessHidetsugu extends HeartlessHidetsuguBase {
  constructor (game) {
    super(game, "Heartless Hidetsugu", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = HeartlessHidetsugu;
