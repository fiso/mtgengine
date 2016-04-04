"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShriekmawBase = require("../setARC/Shriekmaw.js");

class Shriekmaw extends ShriekmawBase {
  constructor(game) {
    super(game, "Shriekmaw", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Shriekmaw;
