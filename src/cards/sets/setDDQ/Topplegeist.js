"use strict";
const Constants = require ("../../../Constants");
const TopplegeistBase = require("../setSOI/Topplegeist");

class Topplegeist extends TopplegeistBase {
  constructor (game) {
    super(game, "Topplegeist", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = Topplegeist;
