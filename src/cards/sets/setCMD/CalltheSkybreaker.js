"use strict";
const Constants = require ("../../../Constants");
const CalltheSkybreakerBase = require("../setEMA/CalltheSkybreaker");

class CalltheSkybreaker extends CalltheSkybreakerBase {
  constructor (game) {
    super(game, "Call the Skybreaker", "Commander 2011", "CMD");
  }
}

module.exports = CalltheSkybreaker;
