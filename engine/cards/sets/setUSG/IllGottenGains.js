"use strict";
const Constants = require ("../../../Constants");
const IllGottenGainsBase = require("../setCNS/IllGottenGains");

class IllGottenGains extends IllGottenGainsBase {
  constructor(game) {
    super(game, "Ill-Gotten Gains", "Urza's Saga", "USG");
  }
}

module.exports = IllGottenGains;
