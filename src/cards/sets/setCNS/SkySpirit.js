"use strict";
const Constants = require ("../../../Constants");
const SkySpiritBase = require("../setDDI/SkySpirit");

class SkySpirit extends SkySpiritBase {
  constructor (game) {
    super(game, "Sky Spirit", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SkySpirit;
