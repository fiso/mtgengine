"use strict";
const Constants = require ("../../../Constants");
const IntangibleVirtueBase = require("../setMM3/IntangibleVirtue");

class IntangibleVirtue extends IntangibleVirtueBase {
  constructor (game) {
    super(game, "Intangible Virtue", "Eternal Masters", "EMA");
  }
}

module.exports = IntangibleVirtue;
