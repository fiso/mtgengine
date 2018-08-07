"use strict";
const Constants = require ("../../../Constants");
const EntombBase = require("../setMP2/Entomb");

class Entomb extends EntombBase {
  constructor (game) {
    super(game, "Entomb", "World Championship Decks 2003", "WC03");
  }
}

module.exports = Entomb;
