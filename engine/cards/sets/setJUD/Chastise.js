"use strict";
const Constants = require ("../../../Constants");
const ChastiseBase = require("../set8ED/Chastise");

class Chastise extends ChastiseBase {
  constructor(game) {
    super(game, "Chastise", "Judgment", "JUD");
  }
}

module.exports = Chastise;
