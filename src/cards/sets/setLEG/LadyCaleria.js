"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LadyCaleria extends UnimplementedCard {
  constructor(game) {
    super(game, "Lady Caleria", "Legends", "LEG");
  }
}

module.exports = LadyCaleria;
