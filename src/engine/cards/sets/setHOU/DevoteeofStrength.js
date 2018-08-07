"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevoteeofStrength extends UnimplementedCard {
  constructor (game) {
    super(game, "Devotee of Strength", "Hour of Devastation", "HOU");
  }
}

module.exports = DevoteeofStrength;
