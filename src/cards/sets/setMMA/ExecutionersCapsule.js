"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExecutionersCapsule extends UnimplementedCard {
  constructor (game) {
    super(game, "Executioner's Capsule", "Modern Masters", "MMA");
  }
}

module.exports = ExecutionersCapsule;
