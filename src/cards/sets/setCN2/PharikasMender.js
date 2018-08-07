"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PharikasMender extends UnimplementedCard {
  constructor (game) {
    super(game, "Pharika's Mender", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = PharikasMender;
