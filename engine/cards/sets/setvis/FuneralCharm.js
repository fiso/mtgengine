"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FuneralCharmBase = require("../setTSB/FuneralCharm.js");

class FuneralCharm extends FuneralCharmBase {
  constructor(game) {
    super(game, "Funeral Charm", "Visions", "VIS");
  }
}

module.exports = FuneralCharm;
