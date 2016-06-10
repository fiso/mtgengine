"use strict";
const Constants = require ("../../../Constants");
const BreathofMalfegorBase = require("../setARB/BreathofMalfegor");

class BreathofMalfegor extends BreathofMalfegorBase {
  constructor (game) {
    super(game, "Breath of Malfegor", "Media Inserts", "pMEI");
  }
}

module.exports = BreathofMalfegor;
