"use strict";
const Constants = require ("../../../Constants");
const AngelofFinalityBase = require("../setCMA/AngelofFinality");

class AngelofFinality extends AngelofFinalityBase {
  constructor (game) {
    super(game, "Angel of Finality", "Commander 2013", "C13");
  }
}

module.exports = AngelofFinality;
