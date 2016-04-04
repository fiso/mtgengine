"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChillingApparition extends Card {
  constructor(game) {
    super(game, "Chilling Apparition", "Prophecy", "PCY");
  }
}

module.exports = ChillingApparition;
