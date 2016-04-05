"use strict";
const Constants = require ("../../../Constants");
const FencingAceBase = require("../setDDL/FencingAce");

class FencingAce extends FencingAceBase {
  constructor(game) {
    super(game, "Fencing Ace", "Return to Ravnica", "RTR");
  }
}

module.exports = FencingAce;
