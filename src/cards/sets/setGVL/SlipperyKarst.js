"use strict";
const Constants = require ("../../../Constants");
const SlipperyKarstBase = require("../setCMA/SlipperyKarst");

class SlipperyKarst extends SlipperyKarstBase {
  constructor (game) {
    super(game, "Slippery Karst", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = SlipperyKarst;
