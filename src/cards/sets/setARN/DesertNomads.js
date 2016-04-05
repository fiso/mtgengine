"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesertNomads extends UnimplementedCard {
  constructor(game) {
    super(game, "Desert Nomads", "Arabian Nights", "ARN");
  }
}

module.exports = DesertNomads;
