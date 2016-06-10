"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemurRunemark extends UnimplementedCard {
  constructor (game) {
    super(game, "Temur Runemark", "Fate Reforged", "FRF");
  }
}

module.exports = TemurRunemark;
