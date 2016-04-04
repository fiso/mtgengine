"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FrontierGuideBase = require("../setDDP/FrontierGuide.js");

class FrontierGuide extends FrontierGuideBase {
  constructor(game) {
    super(game, "Frontier Guide", "Zendikar", "ZEN");
  }
}

module.exports = FrontierGuide;
