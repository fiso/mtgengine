"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ToothandClawBase = require("../setC13/ToothandClaw.js");

class ToothandClaw extends ToothandClawBase {
  constructor(game) {
    super(game, "Tooth and Claw", "Tempest", "TMP");
  }
}

module.exports = ToothandClaw;
