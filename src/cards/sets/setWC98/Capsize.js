"use strict";
const Constants = require ("../../../Constants");
const CapsizeBase = require("../setMP2/Capsize");

class Capsize extends CapsizeBase {
  constructor (game) {
    super(game, "Capsize", "World Championship Decks 1998", "WC98");
  }
}

module.exports = Capsize;
