"use strict";
const Constants = require ("../../../Constants");
const SerendibDjinnBase = require("../setME4/SerendibDjinn");

class SerendibDjinn extends SerendibDjinnBase {
  constructor (game) {
    super(game, "Serendib Djinn", "Arabian Nights", "ARN");
  }
}

module.exports = SerendibDjinn;
