"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuppressionBonds extends UnimplementedCard {
  constructor (game) {
    super(game, "Suppression Bonds", "Magic Origins", "ORI");
  }
}

module.exports = SuppressionBonds;
