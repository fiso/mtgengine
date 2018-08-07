"use strict";
const Constants = require ("../../../Constants");
const BlazingSpecterBase = require("../setVMA/BlazingSpecter");

class BlazingSpecter extends BlazingSpecterBase {
  constructor (game) {
    super(game, "Blazing Specter", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = BlazingSpecter;
