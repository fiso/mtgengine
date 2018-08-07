"use strict";
const Constants = require ("../../../Constants");
const WingSnareBase = require("../setW17/WingSnare");

class WingSnare extends WingSnareBase {
  constructor (game) {
    super(game, "Wing Snare", "Seventh Edition", "7ED");
  }
}

module.exports = WingSnare;
