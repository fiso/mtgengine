"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemurWarShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Temur War Shaman", "Fate Reforged", "FRF");
  }
}

module.exports = TemurWarShaman;
