"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IllGottenGainsBase = require("../setCNS/IllGottenGains.js");

class IllGottenGains extends IllGottenGainsBase {
  constructor(game) {
    super(game, "Ill-Gotten Gains", "Urza's Saga", "USG");
  }
}

module.exports = IllGottenGains;
