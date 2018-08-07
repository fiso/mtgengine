"use strict";
const Constants = require ("../../../Constants");
const AjanisPridemateBase = require("../setM19/AjanisPridemate");

class AjanisPridemate extends AjanisPridemateBase {
  constructor (game) {
    super(game, "Ajani's Pridemate", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = AjanisPridemate;
