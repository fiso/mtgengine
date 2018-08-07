"use strict";
const Constants = require ("../../../Constants");
const ElvishRejuvenatorBase = require("../setM19/ElvishRejuvenator");

class ElvishRejuvenator extends ElvishRejuvenatorBase {
  constructor (game) {
    super(game, "Elvish Rejuvenator", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = ElvishRejuvenator;
