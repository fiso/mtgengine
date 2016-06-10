"use strict";
const Constants = require ("../../../Constants");
const ConsumingAberrationBase = require("../setGTC/ConsumingAberration");

class ConsumingAberration extends ConsumingAberrationBase {
  constructor (game) {
    super(game, "Consuming Aberration", "Prerelease Events", "pPRE");
  }
}

module.exports = ConsumingAberration;
