"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Imprison extends UnimplementedCard {
  constructor(game) {
    super(game, "Imprison", "Legends", "LEG");
  }
}

module.exports = Imprison;
