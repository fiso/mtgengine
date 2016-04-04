"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RighteousFuryBase = require("../setME2/RighteousFury.js");

class RighteousFury extends RighteousFuryBase {
  constructor(game) {
    super(game, "Righteous Fury", "Starter 1999", "S99");
  }
}

module.exports = RighteousFury;
