"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NatureDemandsanOffering extends Card {
  constructor(game) {
    super(game, "Nature Demands an Offering", "Archenemy", "ARC");
  }
}

module.exports = NatureDemandsanOffering;
