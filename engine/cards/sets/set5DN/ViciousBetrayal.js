"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViciousBetrayal extends UnimplementedCard {
  constructor(game) {
    super(game, "Vicious Betrayal", "Fifth Dawn", "5DN");
  }
}

module.exports = ViciousBetrayal;
