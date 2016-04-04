"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpiritLinkBase = require("../set6ED/SpiritLink.js");

class SpiritLink extends SpiritLinkBase {
  constructor(game) {
    super(game, "Spirit Link", "Fourth Edition", "4ED");
  }
}

module.exports = SpiritLink;
