"use strict";
const Constants = require ("../../../Constants");
const IzzetCharmBase = require("../setMM3/IzzetCharm");

class IzzetCharm extends IzzetCharmBase {
  constructor (game) {
    super(game, "Izzet Charm", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = IzzetCharm;
