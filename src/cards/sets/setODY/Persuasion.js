"use strict";
const Constants = require ("../../../Constants");
const PersuasionBase = require("../set10E/Persuasion");

class Persuasion extends PersuasionBase {
  constructor (game) {
    super(game, "Persuasion", "Odyssey", "ODY");
  }
}

module.exports = Persuasion;
