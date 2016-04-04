"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BenalishCommander extends Card {
  constructor(game) {
    super(game, "Benalish Commander", "Planar Chaos", "PLC");
  }
}

module.exports = BenalishCommander;
