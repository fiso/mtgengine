"use strict";
const Constants = require ("../../../Constants");
const SorinMarkovBase = require("../setM12/SorinMarkov");

class SorinMarkov extends SorinMarkovBase {
  constructor(game) {
    super(game, "Sorin Markov", "Zendikar", "ZEN");
  }
}

module.exports = SorinMarkov;
