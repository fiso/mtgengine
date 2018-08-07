"use strict";
const Constants = require ("../../../Constants");
const NissasChosenBase = require("../setDDR/NissasChosen");

class NissasChosen extends NissasChosenBase {
  constructor (game) {
    super(game, "Nissa's Chosen", "Zendikar", "ZEN");
  }
}

module.exports = NissasChosen;
