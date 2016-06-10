"use strict";
const Constants = require ("../../../Constants");
const SheerDropBase = require("../setBFZ/SheerDrop");

class SheerDrop extends SheerDropBase {
  constructor (game) {
    super(game, "Sheer Drop", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = SheerDrop;
