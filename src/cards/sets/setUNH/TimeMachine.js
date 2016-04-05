"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeMachine extends UnimplementedCard {
  constructor(game) {
    super(game, "Time Machine", "Unhinged", "UNH");
  }
}

module.exports = TimeMachine;
