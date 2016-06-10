"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AzoriusAethermage extends UnimplementedCard {
  constructor (game) {
    super(game, "Azorius Æthermage", "Dissension", "DIS");
  }
}

module.exports = AzoriusAethermage;
