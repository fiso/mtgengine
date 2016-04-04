"use strict";
const Constants = require ("../../../Constants");
const JuzámDjinnBase = require("../setARN/JuzámDjinn");

class JuzámDjinn extends JuzámDjinnBase {
  constructor(game) {
    super(game, "Juzám Djinn", "Masters Edition", "MED");
  }
}

module.exports = JuzámDjinn;
