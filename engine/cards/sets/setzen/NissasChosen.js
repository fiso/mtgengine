"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NissasChosenBase = require("../setpWPN/NissasChosen.js");

class NissasChosen extends NissasChosenBase {
  constructor(game) {
    super(game, "Nissa's Chosen", "Zendikar", "ZEN");
  }
}

module.exports = NissasChosen;
