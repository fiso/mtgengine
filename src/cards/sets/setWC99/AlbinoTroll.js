"use strict";
const Constants = require ("../../../Constants");
const AlbinoTrollBase = require("../setGVL/AlbinoTroll");

class AlbinoTroll extends AlbinoTrollBase {
  constructor (game) {
    super(game, "Albino Troll", "World Championship Decks 1999", "WC99");
  }
}

module.exports = AlbinoTroll;
