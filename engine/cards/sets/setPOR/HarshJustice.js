"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HarshJusticeBase = require("../setME4/HarshJustice.js");

class HarshJustice extends HarshJusticeBase {
  constructor(game) {
    super(game, "Harsh Justice", "Portal", "POR");
  }
}

module.exports = HarshJustice;
