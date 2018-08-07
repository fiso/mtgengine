"use strict";
const Constants = require ("../../../Constants");
const EdgarMarkovBase = require("../setOC17/EdgarMarkov");

class EdgarMarkov extends EdgarMarkovBase {
  constructor (game) {
    super(game, "Edgar Markov", "Commander 2017", "C17");
  }
}

module.exports = EdgarMarkov;
