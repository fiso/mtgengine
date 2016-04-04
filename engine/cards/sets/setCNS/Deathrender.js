"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathrenderBase = require("../setLRW/Deathrender.js");

class Deathrender extends DeathrenderBase {
  constructor(game) {
    super(game, "Deathrender", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Deathrender;
