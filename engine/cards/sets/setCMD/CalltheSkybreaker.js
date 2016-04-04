"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CalltheSkybreakerBase = require("../setC15/CalltheSkybreaker.js");

class CalltheSkybreaker extends CalltheSkybreakerBase {
  constructor(game) {
    super(game, "Call the Skybreaker", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = CalltheSkybreaker;
