"use strict";
const Constants = require ("../../../Constants");
const FlashfreezeBase = require("../setMM2/Flashfreeze");

class Flashfreeze extends FlashfreezeBase {
  constructor (game) {
    super(game, "Flashfreeze", "Tenth Edition", "10E");
  }
}

module.exports = Flashfreeze;
