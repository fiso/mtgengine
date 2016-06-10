"use strict";
const Constants = require ("../../../Constants");
const SpiritLinkBase = require("../set6ED/SpiritLink");

class SpiritLink extends SpiritLinkBase {
  constructor (game) {
    super(game, "Spirit Link", "Fifth Edition", "5ED");
  }
}

module.exports = SpiritLink;
