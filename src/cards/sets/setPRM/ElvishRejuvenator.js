"use strict";
const Constants = require ("../../../Constants");
const ElvishRejuvenatorBase = require("../setM19/ElvishRejuvenator");

class ElvishRejuvenator extends ElvishRejuvenatorBase {
  constructor (game) {
    super(game, "Elvish Rejuvenator", "Magic Online Promos", "PRM");
  }
}

module.exports = ElvishRejuvenator;
