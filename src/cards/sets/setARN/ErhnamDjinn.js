"use strict";
const Constants = require ("../../../Constants");
const ErhnamDjinnBase = require("../setATH/ErhnamDjinn");

class ErhnamDjinn extends ErhnamDjinnBase {
  constructor (game) {
    super(game, "Erhnam Djinn", "Arabian Nights", "ARN");
  }
}

module.exports = ErhnamDjinn;
