"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlessedWind extends UnimplementedCard {
  constructor (game) {
    super(game, "Blessed Wind", "Prophecy", "PCY");
  }
}

module.exports = BlessedWind;
