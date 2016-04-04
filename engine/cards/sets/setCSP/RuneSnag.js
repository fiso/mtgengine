"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RuneSnag extends Card {
  constructor(game) {
    super(game, "Rune Snag", "Coldsnap", "CSP");
  }
}

module.exports = RuneSnag;
