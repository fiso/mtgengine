"use strict";
const Constants = require ("../../../Constants");
const FlashfreezeBase = require("../setCSP/Flashfreeze");

class Flashfreeze extends FlashfreezeBase {
  constructor(game) {
    super(game, "Flashfreeze", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Flashfreeze;
