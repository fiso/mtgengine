"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Excavation extends UnimplementedCard {
  constructor (game) {
    super(game, "Excavation", "Prophecy", "PCY");
  }
}

module.exports = Excavation;
