"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreadMill extends UnimplementedCard {
  constructor (game) {
    super(game, "Tread Mill", "Unstable", "UST");
  }
}

module.exports = TreadMill;
