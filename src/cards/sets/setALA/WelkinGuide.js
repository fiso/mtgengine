"use strict";
const Constants = require ("../../../Constants");
const WelkinGuideBase = require("../setEMA/WelkinGuide");

class WelkinGuide extends WelkinGuideBase {
  constructor (game) {
    super(game, "Welkin Guide", "Shards of Alara", "ALA");
  }
}

module.exports = WelkinGuide;
