"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HitRun extends UnimplementedCard {
  constructor (game) {
    super(game, "Hit // Run", "Dissension", "DIS");
  }
}

module.exports = HitRun;
