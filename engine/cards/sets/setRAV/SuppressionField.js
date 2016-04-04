"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SuppressionField extends Card {
  constructor(game) {
    super(game, "Suppression Field", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SuppressionField;
