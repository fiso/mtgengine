"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PharikasMender extends UnimplementedCard {
  constructor (game) {
    super(game, "Pharika's Mender", "Theros", "THS");
  }
}

module.exports = PharikasMender;
