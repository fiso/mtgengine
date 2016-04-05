"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerendibEfreet extends UnimplementedCard {
  constructor(game) {
    super(game, "Serendib Efreet", "Arabian Nights", "ARN");
  }
}

module.exports = SerendibEfreet;
