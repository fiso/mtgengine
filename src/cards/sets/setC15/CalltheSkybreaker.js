"use strict";
const Constants = require ("../../../Constants");
const CalltheSkybreakerBase = require("../setEMA/CalltheSkybreaker");

class CalltheSkybreaker extends CalltheSkybreakerBase {
  constructor (game) {
    super(game, "Call the Skybreaker", "Commander 2015", "C15");
  }
}

module.exports = CalltheSkybreaker;
