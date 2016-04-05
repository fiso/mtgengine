"use strict";
const Constants = require ("../../../Constants");
const KrosanVergeBase = require("../setARC/KrosanVerge");

class KrosanVerge extends KrosanVergeBase {
  constructor(game) {
    super(game, "Krosan Verge", "Judgment", "JUD");
  }
}

module.exports = KrosanVerge;
