"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExecutionersCapsule extends UnimplementedCard {
  constructor (game) {
    super(game, "Executioner's Capsule", "Commander 2016", "C16");
  }
}

module.exports = ExecutionersCapsule;
