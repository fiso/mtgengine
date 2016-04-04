"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DuergarMineCaptain extends Card {
  constructor(game) {
    super(game, "Duergar Mine-Captain", "Eventide", "EVE");
  }
}

module.exports = DuergarMineCaptain;
