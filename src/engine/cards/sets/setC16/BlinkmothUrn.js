"use strict";
const Constants = require ("../../../Constants");
const BlinkmothUrnBase = require("../setC18/BlinkmothUrn");

class BlinkmothUrn extends BlinkmothUrnBase {
  constructor (game) {
    super(game, "Blinkmoth Urn", "Commander 2016", "C16");
  }
}

module.exports = BlinkmothUrn;
