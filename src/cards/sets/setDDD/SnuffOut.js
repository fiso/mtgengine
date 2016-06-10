"use strict";
const Constants = require ("../../../Constants");
const SnuffOutBase = require("../setDD3_GVL/SnuffOut");

class SnuffOut extends SnuffOutBase {
  constructor (game) {
    super(game, "Snuff Out", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = SnuffOut;
