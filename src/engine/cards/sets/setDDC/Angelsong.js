"use strict";
const Constants = require ("../../../Constants");
const AngelsongBase = require("../setDVD/Angelsong");

class Angelsong extends AngelsongBase {
  constructor (game) {
    super(game, "Angelsong", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = Angelsong;
