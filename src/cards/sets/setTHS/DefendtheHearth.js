"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DefendtheHearth extends UnimplementedCard {
  constructor(game) {
    super(game, "Defend the Hearth", "Theros", "THS");
  }
}

module.exports = DefendtheHearth;
