"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EchoChamber extends Card {
  constructor(game) {
    super(game, "Echo Chamber", "Tempest", "TMP");
  }
}

module.exports = EchoChamber;
