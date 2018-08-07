"use strict";
const Constants = require ("../../../Constants");
const HeartlessHidetsuguBase = require("../setCNS/HeartlessHidetsugu");

class HeartlessHidetsugu extends HeartlessHidetsuguBase {
  constructor (game) {
    super(game, "Heartless Hidetsugu", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = HeartlessHidetsugu;
