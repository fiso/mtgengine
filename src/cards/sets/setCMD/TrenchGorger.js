"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrenchGorger extends UnimplementedCard {
  constructor (game) {
    super(game, "Trench Gorger", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = TrenchGorger;
