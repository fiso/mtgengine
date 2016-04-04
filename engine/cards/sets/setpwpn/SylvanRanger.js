"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SylvanRangerBase = require("../setC14/SylvanRanger.js");

class SylvanRanger extends SylvanRangerBase {
  constructor(game) {
    super(game, "Sylvan Ranger", "WPN and Gateway", "pWPN");
  }
}

module.exports = SylvanRanger;
