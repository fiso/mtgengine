"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CourtCleric extends UnimplementedCard {
  constructor (game) {
    super(game, "Court Cleric", "Core Set 2019", "M19");
  }
}

module.exports = CourtCleric;
