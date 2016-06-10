"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AzoriusSignet extends UnimplementedCard {
  constructor (game) {
    super(game, "Azorius Signet", "Archenemy", "ARC");
  }
}

module.exports = AzoriusSignet;
