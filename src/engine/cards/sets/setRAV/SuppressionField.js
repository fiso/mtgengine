"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuppressionField extends UnimplementedCard {
  constructor (game) {
    super(game, "Suppression Field", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SuppressionField;
