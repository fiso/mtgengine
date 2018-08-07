"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenLightsmith extends UnimplementedCard {
  constructor (game) {
    super(game, "Dwarven Lightsmith", "Battlebond", "BBD");
  }
}

module.exports = DwarvenLightsmith;
