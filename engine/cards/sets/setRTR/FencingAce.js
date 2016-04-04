"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FencingAceBase = require("../setDDL/FencingAce.js");

class FencingAce extends FencingAceBase {
  constructor(game) {
    super(game, "Fencing Ace", "Return to Ravnica", "RTR");
  }
}

module.exports = FencingAce;
