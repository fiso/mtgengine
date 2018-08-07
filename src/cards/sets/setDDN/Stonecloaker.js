"use strict";
const Constants = require ("../../../Constants");
const StonecloakerBase = require("../setCMA/Stonecloaker");

class Stonecloaker extends StonecloakerBase {
  constructor (game) {
    super(game, "Stonecloaker", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = Stonecloaker;
