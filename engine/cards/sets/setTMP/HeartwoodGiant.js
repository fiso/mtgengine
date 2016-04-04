"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeartwoodGiant extends Card {
  constructor(game) {
    super(game, "Heartwood Giant", "Tempest", "TMP");
  }
}

module.exports = HeartwoodGiant;
