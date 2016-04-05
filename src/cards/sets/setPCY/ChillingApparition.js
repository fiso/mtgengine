"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChillingApparition extends UnimplementedCard {
  constructor(game) {
    super(game, "Chilling Apparition", "Prophecy", "PCY");
  }
}

module.exports = ChillingApparition;
