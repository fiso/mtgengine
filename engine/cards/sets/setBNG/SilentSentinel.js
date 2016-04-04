"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SilentSentinel extends Card {
  constructor(game) {
    super(game, "Silent Sentinel", "Born of the Gods", "BNG");
  }
}

module.exports = SilentSentinel;
