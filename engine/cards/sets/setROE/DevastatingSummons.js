"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DevastatingSummons extends Card {
  constructor(game) {
    super(game, "Devastating Summons", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = DevastatingSummons;
