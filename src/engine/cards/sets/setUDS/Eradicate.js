"use strict";
const Constants = require ("../../../Constants");
const EradicateBase = require("../setBOK/Eradicate");

class Eradicate extends EradicateBase {
  constructor (game) {
    super(game, "Eradicate", "Urza's Destiny", "UDS");
  }
}

module.exports = Eradicate;
