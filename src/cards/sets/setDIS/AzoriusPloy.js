"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AzoriusPloy extends UnimplementedCard {
  constructor (game) {
    super(game, "Azorius Ploy", "Dissension", "DIS");
  }
}

module.exports = AzoriusPloy;
