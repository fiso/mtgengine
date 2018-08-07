"use strict";
const Constants = require ("../../../Constants");
const EmeraldCharmBase = require("../setWC98/EmeraldCharm");

class EmeraldCharm extends EmeraldCharmBase {
  constructor (game) {
    super(game, "Emerald Charm", "World Championship Decks 1997", "WC97");
  }
}

module.exports = EmeraldCharm;
