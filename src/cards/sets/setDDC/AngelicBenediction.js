"use strict";
const Constants = require ("../../../Constants");
const AngelicBenedictionBase = require("../setDD3_DVD/AngelicBenediction");

class AngelicBenediction extends AngelicBenedictionBase {
  constructor (game) {
    super(game, "Angelic Benediction", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = AngelicBenediction;
