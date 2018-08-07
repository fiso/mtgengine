"use strict";
const Constants = require ("../../../Constants");
const ErhnamDjinnBase = require("../setVMA/ErhnamDjinn");

class ErhnamDjinn extends ErhnamDjinnBase {
  constructor (game) {
    super(game, "Erhnam Djinn", "Chronicles", "CHR");
  }
}

module.exports = ErhnamDjinn;
