"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Darkness extends UnimplementedCard {
  constructor(game) {
    super(game, "Darkness", "Legends", "LEG");
  }
}

module.exports = Darkness;
