"use strict";
const Constants = require ("../../../Constants");
const ChartoothCougarBase = require("../setA25/ChartoothCougar");

class ChartoothCougar extends ChartoothCougarBase {
  constructor (game) {
    super(game, "Chartooth Cougar", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = ChartoothCougar;
