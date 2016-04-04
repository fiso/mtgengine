"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HandtoHand extends Card {
  constructor(game) {
    super(game, "Hand to Hand", "Tempest", "TMP");
  }
}

module.exports = HandtoHand;
