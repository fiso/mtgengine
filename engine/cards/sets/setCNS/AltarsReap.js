"use strict";
const Constants = require ("../../../Constants");
const AltarsReapBase = require("../setBFZ/AltarsReap");

class AltarsReap extends AltarsReapBase {
  constructor(game) {
    super(game, "Altar's Reap", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = AltarsReap;
