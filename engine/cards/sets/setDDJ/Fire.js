"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireBase = require("../setAPC/Fire.js");

class Fire extends FireBase {
  constructor(game) {
    super(game, "Fire", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Fire;
