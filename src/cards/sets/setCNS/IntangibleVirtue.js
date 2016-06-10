"use strict";
const Constants = require ("../../../Constants");
const IntangibleVirtueBase = require("../setISD/IntangibleVirtue");

class IntangibleVirtue extends IntangibleVirtueBase {
  constructor (game) {
    super(game, "Intangible Virtue", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = IntangibleVirtue;
