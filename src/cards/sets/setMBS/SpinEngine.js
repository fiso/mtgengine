"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpinEngine extends UnimplementedCard {
  constructor(game) {
    super(game, "Spin Engine", "Mirrodin Besieged", "MBS");
  }
}

module.exports = SpinEngine;
