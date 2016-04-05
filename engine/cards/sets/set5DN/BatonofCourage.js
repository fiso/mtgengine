"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BatonofCourage extends UnimplementedCard {
  constructor(game) {
    super(game, "Baton of Courage", "Fifth Dawn", "5DN");
  }
}

module.exports = BatonofCourage;
