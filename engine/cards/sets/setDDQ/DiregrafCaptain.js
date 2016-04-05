"use strict";
const Constants = require ("../../../Constants");
const DiregrafCaptainBase = require("../setDKA/DiregrafCaptain");

class DiregrafCaptain extends DiregrafCaptainBase {
  constructor(game) {
    super(game, "Diregraf Captain", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = DiregrafCaptain;
