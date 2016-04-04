"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HeartlessHidetsuguBase = require("../setBOK/HeartlessHidetsugu.js");

class HeartlessHidetsugu extends HeartlessHidetsuguBase {
  constructor(game) {
    super(game, "Heartless Hidetsugu", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = HeartlessHidetsugu;
