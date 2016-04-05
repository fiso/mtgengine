"use strict";
const Constants = require ("../../../Constants");
const SlipperyKarstBase = require("../setATH/SlipperyKarst");

class SlipperyKarst extends SlipperyKarstBase {
  constructor(game) {
    super(game, "Slippery Karst", "Beatdown Box Set", "BTD");
  }
}

module.exports = SlipperyKarst;
