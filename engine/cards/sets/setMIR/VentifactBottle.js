"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VentifactBottle extends UnimplementedCard {
  constructor(game) {
    super(game, "Ventifact Bottle", "Mirage", "MIR");
  }
}

module.exports = VentifactBottle;
