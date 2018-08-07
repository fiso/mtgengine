"use strict";
const Constants = require ("../../../Constants");
const AltarsReapBase = require("../setMTGA/AltarsReap");

class AltarsReap extends AltarsReapBase {
  constructor (game) {
    super(game, "Altar's Reap", "Magic 2014", "M14");
  }
}

module.exports = AltarsReap;
