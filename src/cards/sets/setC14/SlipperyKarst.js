"use strict";
const Constants = require ("../../../Constants");
const SlipperyKarstBase = require("../setCMA/SlipperyKarst");

class SlipperyKarst extends SlipperyKarstBase {
  constructor (game) {
    super(game, "Slippery Karst", "Commander 2014", "C14");
  }
}

module.exports = SlipperyKarst;
