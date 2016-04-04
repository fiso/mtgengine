"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TimeMachine extends Card {
  constructor(game) {
    super(game, "Time Machine", "Unhinged", "UNH");
  }
}

module.exports = TimeMachine;
