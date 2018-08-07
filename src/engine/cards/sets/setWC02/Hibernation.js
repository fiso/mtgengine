"use strict";
const Constants = require ("../../../Constants");
const HibernationBase = require("../set8ED/Hibernation");

class Hibernation extends HibernationBase {
  constructor (game) {
    super(game, "Hibernation", "World Championship Decks 2002", "WC02");
  }
}

module.exports = Hibernation;
