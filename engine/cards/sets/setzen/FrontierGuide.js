"use strict";
const Constants = require ("../../../Constants");
const FrontierGuideBase = require("../setDDP/FrontierGuide");

class FrontierGuide extends FrontierGuideBase {
  constructor(game) {
    super(game, "Frontier Guide", "Zendikar", "ZEN");
  }
}

module.exports = FrontierGuide;
