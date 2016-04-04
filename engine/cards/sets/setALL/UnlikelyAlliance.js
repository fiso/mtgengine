"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnlikelyAlliance extends UnimplementedCard {
  constructor(game) {
    super(game, "Unlikely Alliance", "Alliances", "ALL");
  }
}

module.exports = UnlikelyAlliance;
