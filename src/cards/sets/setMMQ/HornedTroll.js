"use strict";
const Constants = require ("../../../Constants");
const HornedTrollBase = require("../set8ED/HornedTroll");

class HornedTroll extends HornedTrollBase {
  constructor (game) {
    super(game, "Horned Troll", "Mercadian Masques", "MMQ");
  }
}

module.exports = HornedTroll;
