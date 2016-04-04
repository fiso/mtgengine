"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BullElephant extends Card {
  constructor(game) {
    super(game, "Bull Elephant", "Multiverse Gift Box", "MGB");
  }
}

module.exports = BullElephant;
