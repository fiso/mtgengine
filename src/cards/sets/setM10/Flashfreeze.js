"use strict";
const Constants = require ("../../../Constants");
const FlashfreezeBase = require("../setCSP/Flashfreeze");

class Flashfreeze extends FlashfreezeBase {
  constructor (game) {
    super(game, "Flashfreeze", "Magic 2010", "M10");
  }
}

module.exports = Flashfreeze;
