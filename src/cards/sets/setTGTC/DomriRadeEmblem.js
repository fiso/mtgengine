"use strict";
const Constants = require ("../../../Constants");
const DomriRadeEmblemBase = require("../setTMM3/DomriRadeEmblem");

class DomriRadeEmblem extends DomriRadeEmblemBase {
  constructor (game) {
    super(game, "Domri Rade Emblem", "Gatecrash Tokens", "TGTC");
  }
}

module.exports = DomriRadeEmblem;
