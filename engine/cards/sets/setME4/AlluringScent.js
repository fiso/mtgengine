"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlluringScent extends UnimplementedCard {
  constructor(game) {
    super(game, "Alluring Scent", "Masters Edition IV", "ME4");
  }
}

module.exports = AlluringScent;
