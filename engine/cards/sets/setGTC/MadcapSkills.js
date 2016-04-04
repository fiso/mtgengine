"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MadcapSkills extends Card {
  constructor(game) {
    super(game, "Madcap Skills", "Gatecrash", "GTC");
  }
}

module.exports = MadcapSkills;
