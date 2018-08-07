"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StopThat extends UnimplementedCard {
  constructor (game) {
    super(game, "Stop That", "Unhinged", "UNH");
  }
}

module.exports = StopThat;
