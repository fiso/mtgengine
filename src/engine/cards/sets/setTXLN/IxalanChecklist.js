"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IxalanChecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Ixalan Checklist", "Ixalan Tokens", "TXLN");
  }
}

module.exports = IxalanChecklist;
