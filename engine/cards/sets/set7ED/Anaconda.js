"use strict";
const Constants = require ("../../../Constants");
const AnacondaBase = require("../set9ED/Anaconda");

class Anaconda extends AnacondaBase {
  constructor(game) {
    super(game, "Anaconda", "Seventh Edition", "7ED");
  }
}

module.exports = Anaconda;
