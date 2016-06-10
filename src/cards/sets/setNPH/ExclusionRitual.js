"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExclusionRitual extends UnimplementedCard {
  constructor (game) {
    super(game, "Exclusion Ritual", "New Phyrexia", "NPH");
  }
}

module.exports = ExclusionRitual;
