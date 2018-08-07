"use strict";
const Constants = require ("../../../Constants");
const ScrollThiefBase = require("../setDDT/ScrollThief");

class ScrollThief extends ScrollThiefBase {
  constructor (game) {
    super(game, "Scroll Thief", "Magic 2011", "M11");
  }
}

module.exports = ScrollThief;
