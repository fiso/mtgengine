"use strict";
const Constants = require ("../../../Constants");
const PunchcardBase = require("../setTHOU/Punchcard");

class Punchcard extends PunchcardBase {
  constructor (game) {
    super(game, "Punchcard", "Amonkhet Tokens", "TAKH");
  }
}

module.exports = Punchcard;
