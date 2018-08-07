"use strict";
const Constants = require ("../../../Constants");
const OnduGiantBase = require("../setPCA/OnduGiant");

class OnduGiant extends OnduGiantBase {
  constructor (game) {
    super(game, "Ondu Giant", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = OnduGiant;
