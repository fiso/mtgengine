"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IntangibleVirtueBase = require("../setISD/IntangibleVirtue.js");

class IntangibleVirtue extends IntangibleVirtueBase {
  constructor(game) {
    super(game, "Intangible Virtue", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = IntangibleVirtue;
