"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BatwingBrumeBase = require("../setARC/BatwingBrume.js");

class BatwingBrume extends BatwingBrumeBase {
  constructor(game) {
    super(game, "Batwing Brume", "Eventide", "EVE");
  }
}

module.exports = BatwingBrume;
