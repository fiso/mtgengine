"use strict";
const Constants = require ("../../../Constants");
const SpiritLinkBase = require("../set10E/SpiritLink");

class SpiritLink extends SpiritLinkBase {
  constructor (game) {
    super(game, "Spirit Link", "Legends", "LEG");
  }
}

module.exports = SpiritLink;
