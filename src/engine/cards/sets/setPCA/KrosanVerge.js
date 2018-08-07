"use strict";
const Constants = require ("../../../Constants");
const KrosanVergeBase = require("../setC18/KrosanVerge");

class KrosanVerge extends KrosanVergeBase {
  constructor (game) {
    super(game, "Krosan Verge", "Planechase Anthology", "PCA");
  }
}

module.exports = KrosanVerge;
