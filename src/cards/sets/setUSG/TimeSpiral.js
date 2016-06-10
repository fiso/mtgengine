"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeSpiral extends UnimplementedCard {
  constructor (game) {
    super(game, "Time Spiral", "Urza's Saga", "USG");
  }
}

module.exports = TimeSpiral;
