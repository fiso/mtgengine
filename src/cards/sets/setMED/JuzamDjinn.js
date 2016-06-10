"use strict";
const Constants = require ("../../../Constants");
const JuzamDjinnBase = require("../setARN/JuzamDjinn");

class JuzamDjinn extends JuzamDjinnBase {
  constructor (game) {
    super(game, "Juzám Djinn", "Masters Edition", "MED");
  }
}

module.exports = JuzamDjinn;
