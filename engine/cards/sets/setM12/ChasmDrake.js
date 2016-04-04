"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChasmDrake extends UnimplementedCard {
  constructor(game) {
    super(game, "Chasm Drake", "Magic 2012", "M12");
  }
}

module.exports = ChasmDrake;
