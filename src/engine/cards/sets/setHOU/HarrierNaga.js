"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarrierNaga extends UnimplementedCard {
  constructor (game) {
    super(game, "Harrier Naga", "Hour of Devastation", "HOU");
  }
}

module.exports = HarrierNaga;
