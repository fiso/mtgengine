"use strict";
const Constants = require ("../../../Constants");
const PrizedAmalgamBase = require("../setSOI/PrizedAmalgam");

class PrizedAmalgam extends PrizedAmalgamBase {
  constructor (game) {
    super(game, "Prized Amalgam", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = PrizedAmalgam;
