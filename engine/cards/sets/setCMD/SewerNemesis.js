"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SewerNemesis extends Card {
  constructor(game) {
    super(game, "Sewer Nemesis", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SewerNemesis;
