"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AzoriusFirstWing extends UnimplementedCard {
  constructor (game) {
    super(game, "Azorius First-Wing", "Dissension", "DIS");
  }
}

module.exports = AzoriusFirstWing;
