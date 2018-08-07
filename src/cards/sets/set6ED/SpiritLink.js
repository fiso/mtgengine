"use strict";
const Constants = require ("../../../Constants");
const SpiritLinkBase = require("../set10E/SpiritLink");

class SpiritLink extends SpiritLinkBase {
  constructor (game) {
    super(game, "Spirit Link", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SpiritLink;
