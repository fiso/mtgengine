"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScrollThiefBase = require("../setDDI/ScrollThief.js");

class ScrollThief extends ScrollThiefBase {
  constructor(game) {
    super(game, "Scroll Thief", "Magic 2011", "M11");
  }
}

module.exports = ScrollThief;
