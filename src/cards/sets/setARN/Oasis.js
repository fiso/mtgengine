"use strict";
const Constants = require ("../../../Constants");
const OasisBase = require("../setME4/Oasis");

class Oasis extends OasisBase {
  constructor (game) {
    super(game, "Oasis", "Arabian Nights", "ARN");
  }
}

module.exports = Oasis;
