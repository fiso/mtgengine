"use strict";
const Constants = require ("../../../Constants");
const DriftoftheDeadBase = require("../setME2/DriftoftheDead");

class DriftoftheDead extends DriftoftheDeadBase {
  constructor (game) {
    super(game, "Drift of the Dead", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = DriftoftheDead;
