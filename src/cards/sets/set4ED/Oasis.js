"use strict";
const Constants = require ("../../../Constants");
const OasisBase = require("../setARN/Oasis");

class Oasis extends OasisBase {
  constructor (game) {
    super(game, "Oasis", "Fourth Edition", "4ED");
  }
}

module.exports = Oasis;
