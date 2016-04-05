"use strict";
const Constants = require ("../../../Constants");
const SpiritLinkBase = require("../set6ED/SpiritLink");

class SpiritLink extends SpiritLinkBase {
  constructor(game) {
    super(game, "Spirit Link", "Fourth Edition", "4ED");
  }
}

module.exports = SpiritLink;
