"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ConsumingAberrationBase = require("../setGTC/ConsumingAberration.js");

class ConsumingAberration extends ConsumingAberrationBase {
  constructor(game) {
    super(game, "Consuming Aberration", "Prerelease Events", "pPRE");
  }
}

module.exports = ConsumingAberration;
