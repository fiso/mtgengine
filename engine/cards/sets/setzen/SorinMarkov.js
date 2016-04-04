"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SorinMarkovBase = require("../setM12/SorinMarkov.js");

class SorinMarkov extends SorinMarkovBase {
  constructor(game) {
    super(game, "Sorin Markov", "Zendikar", "ZEN");
  }
}

module.exports = SorinMarkov;
