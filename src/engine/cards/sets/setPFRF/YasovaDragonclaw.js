"use strict";
const Constants = require ("../../../Constants");
const YasovaDragonclawBase = require("../setFRF/YasovaDragonclaw");

class YasovaDragonclaw extends YasovaDragonclawBase {
  constructor (game) {
    super(game, "Yasova Dragonclaw", "Fate Reforged Promos", "PFRF");
  }
}

module.exports = YasovaDragonclaw;
