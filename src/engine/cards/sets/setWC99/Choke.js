"use strict";
const Constants = require ("../../../Constants");
const ChokeBase = require("../setMP2/Choke");

class Choke extends ChokeBase {
  constructor (game) {
    super(game, "Choke", "World Championship Decks 1999", "WC99");
  }
}

module.exports = Choke;
