"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AjanisPridemateBase = require("../setC13/AjanisPridemate.js");

class AjanisPridemate extends AjanisPridemateBase {
  constructor(game) {
    super(game, "Ajani's Pridemate", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = AjanisPridemate;
