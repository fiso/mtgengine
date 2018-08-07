"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TormentofHailfire extends UnimplementedCard {
  constructor (game) {
    super(game, "Torment of Hailfire", "Hour of Devastation", "HOU");
  }
}

module.exports = TormentofHailfire;
