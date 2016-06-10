"use strict";
const Constants = require ("../../../Constants");
const DeathrenderBase = require("../setLRW/Deathrender");

class Deathrender extends DeathrenderBase {
  constructor (game) {
    super(game, "Deathrender", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Deathrender;
