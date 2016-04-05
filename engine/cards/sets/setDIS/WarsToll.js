"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarsToll extends UnimplementedCard {
  constructor(game) {
    super(game, "War's Toll", "Dissension", "DIS");
  }
}

module.exports = WarsToll;
