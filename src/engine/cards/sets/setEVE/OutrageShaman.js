"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OutrageShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Outrage Shaman", "Eventide", "EVE");
  }
}

module.exports = OutrageShaman;
