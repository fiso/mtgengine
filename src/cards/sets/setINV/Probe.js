"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Probe extends UnimplementedCard {
  constructor(game) {
    super(game, "Probe", "Invasion", "INV");
  }
}

module.exports = Probe;
