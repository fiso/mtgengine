"use strict";
const Constants = require ("../../../Constants");
const FlashfreezeBase = require("../setCSP/Flashfreeze");

class Flashfreeze extends FlashfreezeBase {
  constructor (game) {
    super(game, "Flashfreeze", "Tenth Edition", "10E");
  }
}

module.exports = Flashfreeze;
