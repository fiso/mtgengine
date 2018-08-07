"use strict";
const Constants = require ("../../../Constants");
const CounterfluxBase = require("../setC15/Counterflux");

class Counterflux extends CounterfluxBase {
  constructor (game) {
    super(game, "Counterflux", "Return to Ravnica", "RTR");
  }
}

module.exports = Counterflux;
