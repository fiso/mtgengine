"use strict";
const Constants = require ("../../../Constants");
const MurderBase = require("../setM19/Murder");

class Murder extends MurderBase {
  constructor (game) {
    super(game, "Murder", "Eldritch Moon", "EMN");
  }
}

module.exports = Murder;
