"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SimicSignetBase = require("../setC13/SimicSignet.js");

class SimicSignet extends SimicSignetBase {
  constructor(game) {
    super(game, "Simic Signet", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SimicSignet;
