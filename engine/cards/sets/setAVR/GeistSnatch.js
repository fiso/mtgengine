"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GeistSnatch extends Card {
  constructor(game) {
    super(game, "Geist Snatch", "Avacyn Restored", "AVR");
  }
}

module.exports = GeistSnatch;
