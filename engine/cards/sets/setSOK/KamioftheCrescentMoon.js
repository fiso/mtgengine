"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KamioftheCrescentMoon extends UnimplementedCard {
  constructor(game) {
    super(game, "Kami of the Crescent Moon", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = KamioftheCrescentMoon;
