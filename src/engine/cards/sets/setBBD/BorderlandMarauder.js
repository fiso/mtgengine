"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorderlandMarauder extends UnimplementedCard {
  constructor (game) {
    super(game, "Borderland Marauder", "Battlebond", "BBD");
  }
}

module.exports = BorderlandMarauder;
