"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShuDefender extends UnimplementedCard {
  constructor (game) {
    super(game, "Shu Defender", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ShuDefender;
