"use strict";
const Constants = require ("../../../Constants");
const BanefireBase = require("../setM19/Banefire");

class Banefire extends BanefireBase {
  constructor (game) {
    super(game, "Banefire", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = Banefire;
