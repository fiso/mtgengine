"use strict";
const Constants = require ("../../../Constants");
const CalltheSkybreakerBase = require("../setC15/CalltheSkybreaker");

class CalltheSkybreaker extends CalltheSkybreakerBase {
  constructor (game) {
    super(game, "Call the Skybreaker", "Eventide", "EVE");
  }
}

module.exports = CalltheSkybreaker;
