"use strict";
const Constants = require ("../../../Constants");
const FortunateFewBase = require("../setC17/FortunateFew");

class FortunateFew extends FortunateFewBase {
  constructor (game) {
    super(game, "Fortunate Few", "You Make the Cube", "PZ2");
  }
}

module.exports = FortunateFew;
