"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SilverbladePaladinBase = require("../setAVR/SilverbladePaladin.js");

class SilverbladePaladin extends SilverbladePaladinBase {
  constructor(game) {
    super(game, "Silverblade Paladin", "Media Inserts", "pMEI");
  }
}

module.exports = SilverbladePaladin;
