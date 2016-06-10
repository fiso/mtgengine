"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Magnify extends UnimplementedCard {
  constructor (game) {
    super(game, "Magnify", "Urza's Destiny", "UDS");
  }
}

module.exports = Magnify;
