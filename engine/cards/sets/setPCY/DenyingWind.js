"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DenyingWind extends UnimplementedCard {
  constructor(game) {
    super(game, "Denying Wind", "Prophecy", "PCY");
  }
}

module.exports = DenyingWind;
