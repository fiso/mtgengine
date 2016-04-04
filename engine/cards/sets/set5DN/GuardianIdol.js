"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GuardianIdol extends Card {
  constructor(game) {
    super(game, "Guardian Idol", "Fifth Dawn", "5DN");
  }
}

module.exports = GuardianIdol;
