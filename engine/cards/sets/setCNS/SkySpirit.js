"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkySpiritBase = require("../setDDI/SkySpirit.js");

class SkySpirit extends SkySpiritBase {
  constructor(game) {
    super(game, "Sky Spirit", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SkySpirit;
