"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AltarsReapBase = require("../setBFZ/AltarsReap.js");

class AltarsReap extends AltarsReapBase {
  constructor(game) {
    super(game, "Altar's Reap", "Commander 2015", "C15");
  }
}

module.exports = AltarsReap;
