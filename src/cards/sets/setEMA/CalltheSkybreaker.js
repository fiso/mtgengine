"use strict";
const Constants = require ("../../../Constants");
const CalltheSkybreakerBase = require("../setC15/CalltheSkybreaker");

class CalltheSkybreaker extends CalltheSkybreakerBase {
  constructor (game) {
    super(game, "Call the Skybreaker", "Eternal Masters", "EMA");
  }
}

module.exports = CalltheSkybreaker;
