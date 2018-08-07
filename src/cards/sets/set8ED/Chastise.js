"use strict";
const Constants = require ("../../../Constants");
const ChastiseBase = require("../set9ED/Chastise");

class Chastise extends ChastiseBase {
  constructor (game) {
    super(game, "Chastise", "Eighth Edition", "8ED");
  }
}

module.exports = Chastise;
