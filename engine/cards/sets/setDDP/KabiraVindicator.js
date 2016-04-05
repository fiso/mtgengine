"use strict";
const Constants = require ("../../../Constants");
const KabiraVindicatorBase = require("../setDDG/KabiraVindicator");

class KabiraVindicator extends KabiraVindicatorBase {
  constructor(game) {
    super(game, "Kabira Vindicator", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = KabiraVindicator;
