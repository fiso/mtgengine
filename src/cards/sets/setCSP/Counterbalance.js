"use strict";
const Constants = require ("../../../Constants");
const CounterbalanceBase = require("../setMP2/Counterbalance");

class Counterbalance extends CounterbalanceBase {
  constructor (game) {
    super(game, "Counterbalance", "Coldsnap", "CSP");
  }
}

module.exports = Counterbalance;
