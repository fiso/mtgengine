"use strict";
const Constants = require ("../../../Constants");
const FreejamRegentBase = require("../setAER/FreejamRegent");

class FreejamRegent extends FreejamRegentBase {
  constructor (game) {
    super(game, "Freejam Regent", "Aether Revolt Promos", "PAER");
  }
}

module.exports = FreejamRegent;
