"use strict";
const Constants = require ("../../../Constants");
const WirewoodSymbioteBase = require("../setDD3_EVG/WirewoodSymbiote");

class WirewoodSymbiote extends WirewoodSymbioteBase {
  constructor(game) {
    super(game, "Wirewood Symbiote", "Scourge", "SCG");
  }
}

module.exports = WirewoodSymbiote;
