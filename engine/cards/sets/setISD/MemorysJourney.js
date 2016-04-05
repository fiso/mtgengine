"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MemorysJourney extends UnimplementedCard {
  constructor(game) {
    super(game, "Memory's Journey", "Innistrad", "ISD");
  }
}

module.exports = MemorysJourney;
