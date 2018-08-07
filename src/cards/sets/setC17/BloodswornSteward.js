"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodswornSteward extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodsworn Steward", "Commander 2017", "C17");
  }
}

module.exports = BloodswornSteward;
