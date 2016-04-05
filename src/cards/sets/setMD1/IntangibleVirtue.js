"use strict";
const Constants = require ("../../../Constants");
const IntangibleVirtueBase = require("../setISD/IntangibleVirtue");

class IntangibleVirtue extends IntangibleVirtueBase {
  constructor(game) {
    super(game, "Intangible Virtue", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = IntangibleVirtue;
