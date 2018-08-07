"use strict";
const Constants = require ("../../../Constants");
const ElephantGuideBase = require("../setEMA/ElephantGuide");

class ElephantGuide extends ElephantGuideBase {
  constructor (game) {
    super(game, "Elephant Guide", "Judgment", "JUD");
  }
}

module.exports = ElephantGuide;
