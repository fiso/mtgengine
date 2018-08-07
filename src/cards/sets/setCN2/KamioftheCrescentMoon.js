"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KamioftheCrescentMoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Kami of the Crescent Moon", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = KamioftheCrescentMoon;
