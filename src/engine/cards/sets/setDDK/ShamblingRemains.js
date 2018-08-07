"use strict";
const Constants = require ("../../../Constants");
const ShamblingRemainsBase = require("../setDDN/ShamblingRemains");

class ShamblingRemains extends ShamblingRemainsBase {
  constructor (game) {
    super(game, "Shambling Remains", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = ShamblingRemains;
