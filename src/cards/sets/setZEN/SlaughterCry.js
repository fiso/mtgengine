"use strict";
const Constants = require ("../../../Constants");
const SlaughterCryBase = require("../setM12/SlaughterCry");

class SlaughterCry extends SlaughterCryBase {
  constructor (game) {
    super(game, "Slaughter Cry", "Zendikar", "ZEN");
  }
}

module.exports = SlaughterCry;
