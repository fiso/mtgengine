"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MobileFort extends UnimplementedCard {
  constructor (game) {
    super(game, "Mobile Fort", "Urza's Saga", "USG");
  }
}

module.exports = MobileFort;
