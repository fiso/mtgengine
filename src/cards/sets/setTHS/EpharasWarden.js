"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EpharasWarden extends UnimplementedCard {
  constructor(game) {
    super(game, "Ephara's Warden", "Theros", "THS");
  }
}

module.exports = EpharasWarden;
