"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChartoothCougarBase = require("../setDD3_JVC/ChartoothCougar.js");

class ChartoothCougar extends ChartoothCougarBase {
  constructor(game) {
    super(game, "Chartooth Cougar", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = ChartoothCougar;
