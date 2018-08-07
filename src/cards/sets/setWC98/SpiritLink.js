"use strict";
const Constants = require ("../../../Constants");
const SpiritLinkBase = require("../set10E/SpiritLink");

class SpiritLink extends SpiritLinkBase {
  constructor (game) {
    super(game, "Spirit Link", "World Championship Decks 1998", "WC98");
  }
}

module.exports = SpiritLink;
