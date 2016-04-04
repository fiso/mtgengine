"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TibalttheFiendBloodedBase = require("../setAVR/TibalttheFiendBlooded.js");

class TibalttheFiendBlooded extends TibalttheFiendBloodedBase {
  constructor(game) {
    super(game, "Tibalt, the Fiend-Blooded", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = TibalttheFiendBlooded;
