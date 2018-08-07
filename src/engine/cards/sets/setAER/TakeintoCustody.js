"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TakeintoCustody extends UnimplementedCard {
  constructor (game) {
    super(game, "Take into Custody", "Aether Revolt", "AER");
  }
}

module.exports = TakeintoCustody;
