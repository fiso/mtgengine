"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FierceEmpathBase = require("../setARC/FierceEmpath.js");

class FierceEmpath extends FierceEmpathBase {
  constructor(game) {
    super(game, "Fierce Empath", "Scourge", "SCG");
  }
}

module.exports = FierceEmpath;
