"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AuriokSurvivors extends Card {
  constructor(game) {
    super(game, "Auriok Survivors", "New Phyrexia", "NPH");
  }
}

module.exports = AuriokSurvivors;
