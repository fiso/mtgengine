"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NoggleHedgeMage extends UnimplementedCard {
  constructor(game) {
    super(game, "Noggle Hedge-Mage", "Eventide", "EVE");
  }
}

module.exports = NoggleHedgeMage;
