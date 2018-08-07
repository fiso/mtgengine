"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrisonTerm extends UnimplementedCard {
  constructor (game) {
    super(game, "Prison Term", "Commander 2011", "CMD");
  }
}

module.exports = PrisonTerm;
