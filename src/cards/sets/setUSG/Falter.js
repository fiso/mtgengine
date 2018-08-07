"use strict";
const Constants = require ("../../../Constants");
const FalterBase = require("../setVMA/Falter");

class Falter extends FalterBase {
  constructor (game) {
    super(game, "Falter", "Urza's Saga", "USG");
  }
}

module.exports = Falter;
