"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AltarsReapBase = require("../setBFZ/AltarsReap.js");

class AltarsReap extends AltarsReapBase {
  constructor(game) {
    super(game, "Altar's Reap", "Magic 2014 Core Set", "M14");
  }
}

module.exports = AltarsReap;
