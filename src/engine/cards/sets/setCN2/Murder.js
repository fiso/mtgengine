"use strict";
const Constants = require ("../../../Constants");
const MurderBase = require("../setM19/Murder");

class Murder extends MurderBase {
  constructor (game) {
    super(game, "Murder", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = Murder;
