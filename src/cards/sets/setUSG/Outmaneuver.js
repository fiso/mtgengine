"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Outmaneuver extends UnimplementedCard {
  constructor(game) {
    super(game, "Outmaneuver", "Urza's Saga", "USG");
  }
}

module.exports = Outmaneuver;
