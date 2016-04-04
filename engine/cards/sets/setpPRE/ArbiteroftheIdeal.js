"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArbiteroftheIdealBase = require("../setBNG/ArbiteroftheIdeal.js");

class ArbiteroftheIdeal extends ArbiteroftheIdealBase {
  constructor(game) {
    super(game, "Arbiter of the Ideal", "Prerelease Events", "pPRE");
  }
}

module.exports = ArbiteroftheIdeal;
