"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BringDown extends UnimplementedCard {
  constructor (game) {
    super(game, "Bring Down", "Battlebond", "BBD");
  }
}

module.exports = BringDown;
