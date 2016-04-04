"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlummetBase = require("../setARC/Plummet.js");

class Plummet extends PlummetBase {
  constructor(game) {
    super(game, "Plummet", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Plummet;
