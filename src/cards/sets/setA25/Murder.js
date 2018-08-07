"use strict";
const Constants = require ("../../../Constants");
const MurderBase = require("../setM19/Murder");

class Murder extends MurderBase {
  constructor (game) {
    super(game, "Murder", "Masters 25", "A25");
  }
}

module.exports = Murder;
