"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CounterfluxBase = require("../setC15/Counterflux.js");

class Counterflux extends CounterfluxBase {
  constructor(game) {
    super(game, "Counterflux", "Return to Ravnica", "RTR");
  }
}

module.exports = Counterflux;
