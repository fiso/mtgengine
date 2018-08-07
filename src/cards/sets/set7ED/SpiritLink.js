"use strict";
const Constants = require ("../../../Constants");
const SpiritLinkBase = require("../set10E/SpiritLink");

class SpiritLink extends SpiritLinkBase {
  constructor (game) {
    super(game, "Spirit Link", "Seventh Edition", "7ED");
  }
}

module.exports = SpiritLink;
