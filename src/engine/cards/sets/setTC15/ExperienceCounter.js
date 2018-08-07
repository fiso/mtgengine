"use strict";
const Constants = require ("../../../Constants");
const ExperienceCounterBase = require("../setTCMA/ExperienceCounter");

class ExperienceCounter extends ExperienceCounterBase {
  constructor (game) {
    super(game, "Experience Counter", "Commander 2015 Tokens", "TC15");
  }
}

module.exports = ExperienceCounter;
