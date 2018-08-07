"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Twincast extends UnimplementedCard {
  constructor (game) {
    super(game, "Twincast", "Magic 2010", "M10");
  }
}

module.exports = Twincast;
