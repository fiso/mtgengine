"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DiregrafCaptainBase = require("../setDKA/DiregrafCaptain.js");

class DiregrafCaptain extends DiregrafCaptainBase {
  constructor(game) {
    super(game, "Diregraf Captain", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = DiregrafCaptain;
