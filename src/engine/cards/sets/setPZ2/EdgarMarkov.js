"use strict";
const Constants = require ("../../../Constants");
const EdgarMarkovBase = require("../setOC17/EdgarMarkov");

class EdgarMarkov extends EdgarMarkovBase {
  constructor (game) {
    super(game, "Edgar Markov", "You Make the Cube", "PZ2");
  }
}

module.exports = EdgarMarkov;
