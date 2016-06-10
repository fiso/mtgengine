"use strict";
const Constants = require ("../../../Constants");
const SlipperyKarstBase = require("../setATH/SlipperyKarst");

class SlipperyKarst extends SlipperyKarstBase {
  constructor (game) {
    super(game, "Slippery Karst", "Commander 2013 Edition", "C13");
  }
}

module.exports = SlipperyKarst;
