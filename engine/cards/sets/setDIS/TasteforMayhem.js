"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TasteforMayhem extends UnimplementedCard {
  constructor(game) {
    super(game, "Taste for Mayhem", "Dissension", "DIS");
  }
}

module.exports = TasteforMayhem;
