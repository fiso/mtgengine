"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BreathofMalfegorBase = require("../setARB/BreathofMalfegor.js");

class BreathofMalfegor extends BreathofMalfegorBase {
  constructor(game) {
    super(game, "Breath of Malfegor", "Media Inserts", "pMEI");
  }
}

module.exports = BreathofMalfegor;
