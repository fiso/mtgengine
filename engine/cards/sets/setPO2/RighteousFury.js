"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RighteousFuryBase = require("../setME2/RighteousFury.js");

class RighteousFury extends RighteousFuryBase {
  constructor(game) {
    super(game, "Righteous Fury", "Portal Second Age", "PO2");
  }
}

module.exports = RighteousFury;
