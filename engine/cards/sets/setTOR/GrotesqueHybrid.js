"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrotesqueHybrid extends UnimplementedCard {
  constructor(game) {
    super(game, "Grotesque Hybrid", "Torment", "TOR");
  }
}

module.exports = GrotesqueHybrid;
