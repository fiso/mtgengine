"use strict";
const Constants = require ("../../../Constants");
const SlipperyKarstBase = require("../setCMA/SlipperyKarst");

class SlipperyKarst extends SlipperyKarstBase {
  constructor (game) {
    super(game, "Slippery Karst", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SlipperyKarst;
