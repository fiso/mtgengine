"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HurlyBurly extends UnimplementedCard {
  constructor (game) {
    super(game, "Hurly-Burly", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = HurlyBurly;
