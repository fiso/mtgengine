"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JackalFamiliar extends UnimplementedCard {
  constructor(game) {
    super(game, "Jackal Familiar", "Magic 2010", "M10");
  }
}

module.exports = JackalFamiliar;
