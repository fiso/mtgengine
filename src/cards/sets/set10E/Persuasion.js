"use strict";
const Constants = require ("../../../Constants");
const PersuasionBase = require("../setODY/Persuasion");

class Persuasion extends PersuasionBase {
  constructor (game) {
    super(game, "Persuasion", "Tenth Edition", "10E");
  }
}

module.exports = Persuasion;
