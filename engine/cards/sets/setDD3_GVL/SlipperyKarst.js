"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SlipperyKarstBase = require("../setATH/SlipperyKarst.js");

class SlipperyKarst extends SlipperyKarstBase {
  constructor(game) {
    super(game, "Slippery Karst", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = SlipperyKarst;
