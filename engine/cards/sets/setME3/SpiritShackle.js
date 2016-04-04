"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpiritShackleBase = require("../set4ED/SpiritShackle.js");

class SpiritShackle extends SpiritShackleBase {
  constructor(game) {
    super(game, "Spirit Shackle", "Masters Edition III", "ME3");
  }
}

module.exports = SpiritShackle;
