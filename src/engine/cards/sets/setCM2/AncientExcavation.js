"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientExcavation extends UnimplementedCard {
  constructor (game) {
    super(game, "Ancient Excavation", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = AncientExcavation;
