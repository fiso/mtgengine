"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WakestoneGargoyleBase = require("../setDIS/WakestoneGargoyle.js");

class WakestoneGargoyle extends WakestoneGargoyleBase {
  constructor(game) {
    super(game, "Wakestone Gargoyle", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = WakestoneGargoyle;
