"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HellkiteTyrant extends Card {
  constructor(game) {
    super(game, "Hellkite Tyrant", "Gatecrash", "GTC");
  }
}

module.exports = HellkiteTyrant;
