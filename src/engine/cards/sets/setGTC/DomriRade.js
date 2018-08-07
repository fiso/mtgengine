"use strict";
const Constants = require ("../../../Constants");
const DomriRadeBase = require("../setMM3/DomriRade");

class DomriRade extends DomriRadeBase {
  constructor (game) {
    super(game, "Domri Rade", "Gatecrash", "GTC");
  }
}

module.exports = DomriRade;
