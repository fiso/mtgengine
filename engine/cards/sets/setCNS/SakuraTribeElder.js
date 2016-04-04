"use strict";
const Constants = require ("../../../Constants");
const SakuraTribeElderBase = require("../setARC/SakuraTribeElder");

class SakuraTribeElder extends SakuraTribeElderBase {
  constructor(game) {
    super(game, "Sakura-Tribe Elder", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SakuraTribeElder;
