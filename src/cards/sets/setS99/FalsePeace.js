"use strict";
const Constants = require ("../../../Constants");
const FalsePeaceBase = require("../setPOR/FalsePeace");

class FalsePeace extends FalsePeaceBase {
  constructor (game) {
    super(game, "False Peace", "Starter 1999", "S99");
  }
}

module.exports = FalsePeace;
