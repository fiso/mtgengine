"use strict";
const Constants = require ("../../../Constants");
const SlipperyKarstBase = require("../setCMA/SlipperyKarst");

class SlipperyKarst extends SlipperyKarstBase {
  constructor (game) {
    super(game, "Slippery Karst", "Commander 2015", "C15");
  }
}

module.exports = SlipperyKarst;
