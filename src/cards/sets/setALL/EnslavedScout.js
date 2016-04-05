"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnslavedScout extends UnimplementedCard {
  constructor(game) {
    super(game, "Enslaved Scout", "Alliances", "ALL");
  }
}

module.exports = EnslavedScout;
