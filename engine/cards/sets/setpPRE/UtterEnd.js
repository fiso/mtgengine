"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UtterEndBase = require("../setKTK/UtterEnd.js");

class UtterEnd extends UtterEndBase {
  constructor(game) {
    super(game, "Utter End", "Prerelease Events", "pPRE");
  }
}

module.exports = UtterEnd;
