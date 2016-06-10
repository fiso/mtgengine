"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrisonTerm extends UnimplementedCard {
  constructor (game) {
    super(game, "Prison Term", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = PrisonTerm;
