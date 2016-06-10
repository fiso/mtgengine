"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevastatingSummons extends UnimplementedCard {
  constructor (game) {
    super(game, "Devastating Summons", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = DevastatingSummons;
