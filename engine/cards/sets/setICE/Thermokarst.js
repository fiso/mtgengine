"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thermokarst extends UnimplementedCard {
  constructor(game) {
    super(game, "Thermokarst", "Ice Age", "ICE");
  }
}

module.exports = Thermokarst;
