"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpyEye extends UnimplementedCard {
  constructor (game) {
    super(game, "Spy Eye", "Unstable", "UST");
  }
}

module.exports = SpyEye;
