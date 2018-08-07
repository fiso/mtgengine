"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaxingMoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Waxing Moon", "Eldritch Moon", "EMN");
  }
}

module.exports = WaxingMoon;
