"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesertoftheMindful extends UnimplementedCard {
  constructor (game) {
    super(game, "Desert of the Mindful", "Hour of Devastation", "HOU");
  }
}

module.exports = DesertoftheMindful;
