"use strict";
const Constants = require ("../../../Constants");
const CalltheSkybreakerBase = require("../setEMA/CalltheSkybreaker");

class CalltheSkybreaker extends CalltheSkybreakerBase {
  constructor (game) {
    super(game, "Call the Skybreaker", "Eventide", "EVE");
  }
}

module.exports = CalltheSkybreaker;
