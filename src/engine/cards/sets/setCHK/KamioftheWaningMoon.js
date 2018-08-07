"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KamioftheWaningMoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Kami of the Waning Moon", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KamioftheWaningMoon;
