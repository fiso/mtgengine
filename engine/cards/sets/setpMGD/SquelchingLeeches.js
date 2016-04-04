"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SquelchingLeechesBase = require("../setJOU/SquelchingLeeches.js");

class SquelchingLeeches extends SquelchingLeechesBase {
  constructor(game) {
    super(game, "Squelching Leeches", "Magic Game Day", "pMGD");
  }
}

module.exports = SquelchingLeeches;
