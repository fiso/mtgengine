"use strict";
const Constants = require ("../../../Constants");
const JuzamDjinnBase = require("../setMED/JuzamDjinn");

class JuzamDjinn extends JuzamDjinnBase {
  constructor (game) {
    super(game, "Juzám Djinn", "Arabian Nights", "ARN");
  }
}

module.exports = JuzamDjinn;
