"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HydromorphGull extends UnimplementedCard {
  constructor(game) {
    super(game, "Hydromorph Gull", "Torment", "TOR");
  }
}

module.exports = HydromorphGull;
