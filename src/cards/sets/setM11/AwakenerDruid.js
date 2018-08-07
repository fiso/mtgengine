"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AwakenerDruid extends UnimplementedCard {
  constructor (game) {
    super(game, "Awakener Druid", "Magic 2011", "M11");
  }
}

module.exports = AwakenerDruid;
