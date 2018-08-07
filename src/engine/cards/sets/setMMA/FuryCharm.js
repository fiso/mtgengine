"use strict";
const Constants = require ("../../../Constants");
const FuryCharmBase = require("../setIMA/FuryCharm");

class FuryCharm extends FuryCharmBase {
  constructor (game) {
    super(game, "Fury Charm", "Modern Masters", "MMA");
  }
}

module.exports = FuryCharm;
