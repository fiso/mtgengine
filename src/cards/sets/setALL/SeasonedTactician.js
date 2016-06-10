"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeasonedTactician extends UnimplementedCard {
  constructor (game) {
    super(game, "Seasoned Tactician", "Alliances", "ALL");
  }
}

module.exports = SeasonedTactician;
