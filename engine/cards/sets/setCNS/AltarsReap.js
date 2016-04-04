"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AltarsReapBase = require("../setBFZ/AltarsReap.js");

class AltarsReap extends AltarsReapBase {
  constructor(game) {
    super(game, "Altar's Reap", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = AltarsReap;
