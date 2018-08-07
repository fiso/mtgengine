"use strict";
const Constants = require ("../../../Constants");
const FalsePeaceBase = require("../setS99/FalsePeace");

class FalsePeace extends FalsePeaceBase {
  constructor (game) {
    super(game, "False Peace", "Portal", "POR");
  }
}

module.exports = FalsePeace;
