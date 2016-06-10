"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LlanowarDruid extends UnimplementedCard {
  constructor (game) {
    super(game, "Llanowar Druid", "Weatherlight", "WTH");
  }
}

module.exports = LlanowarDruid;
